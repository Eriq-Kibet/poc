import React, { useEffect, useState } from "react";
import { FaceAdd32 } from "@carbon/icons-react";
import "./patientRegistration.component.css";

import { Button, Select, SelectItem, TextInput } from "carbon-components-react";
import {
  GetIdentifierType,
  LocationList,
  registerPatient,
  registerPerson,
} from "./registerPerson.resource";
function AddPatient() {
  const [persoUuid, setpersoUuid] = useState();
  const [items, setItems] = useState([]);
  const [location, setLocation] = useState([]);
  const [personData, setPersonData] = useState({
    givenName: "",
    familyName: "",
    gender: "",
    birthdate: "",
    address1: "",
    cityVillage: "",
    country: "",
    postalCode: "",
  });
  const [patientData, setPatientData] = useState({
    identifier: "",
    identifierType: "",
    location: "",
  });
  const handlePatient = (e) => {
    const patientInfo = { ...patientData };
    patientInfo[e.target.id] = e.target.value;
    setPatientData(patientInfo);
  };
  const handlePerson = (e) => {
    const newdata = { ...personData };
    newdata[e.target.id] = e.target.value;
    setPersonData(newdata);
  };
  // Converting Person Data to a JSON string
  const submitPersonInfo = (e) => { 
    e.preventDefault();
    const bodyString = JSON.stringify({
      names: [
        {
          givenName: `${personData.givenName}`,
          familyName: `${personData.familyName}`,
        },
      ],
      gender: `${personData.gender}`,
      birthdate: `${personData.birthdate}`,
      addresses: [
        {
          address1: `${personData.address1}`,
          cityVillage: `${personData.cityVillage}`,
          country: `${personData.country}`,
          postalCode: `${personData.postalCode}`,
        },
      ],
    });
    registerPerson(bodyString).then((personUuid) => {
      setpersoUuid(personUuid);
    });
  };
  // Converting Patient Data to a JSON string
  const submitPatienInfo = (e) => {
    e.preventDefault();
    const patientBodyString = JSON.stringify({
      person: `${persoUuid}`,
      identifiers: [
        {
          identifier: `${patientData.identifier}`,
          identifierType: `${patientData.identifierType}`,
          location: `${patientData.location}`,
          preferred: false,
        },
      ],
    });
    registerPatient(patientBodyString);
  };

  useEffect(() => {
    //Get Patient Identifier Type
    GetIdentifierType().then((resp) => {
      const identifierTypeResults = resp.map((IdType) => {
        return {
          id: IdType.uuid,
          label: IdType.display,
        };
      });

      setItems(identifierTypeResults);
    });
    // Get Location
    LocationList().then((res) => {
      const locationResults = res.map((locate) => {
        return {
          id: locate.uuid,
          label: locate.display,
        };
      });
      setLocation(locationResults);
    });
  }, []);
  return (
    
    <div>
      <div className="registerPatient">
        <div className="registerPerson">
          <p className="addText">
            <FaceAdd32 />
            Register Person
          </p>
          <form className="addPatientForm" onSubmit={submitPersonInfo}>
            <div className="column">
              <div className="names">
                <TextInput
                  className="names-input"
                  id="givenName"
                  labelText="First Name"
                  onChange={(e) => handlePerson(e)}
                  value={personData.givenName}
                  required
                />
                <TextInput
                  className="names-input"
                  id="familyName"
                  labelText="Middle Name"
                  onChange={(e) => handlePerson(e)}
                  value={personData.familyName}
                  required
                />
                <Select
                  value={personData.gender}
                  id="gender"
                  onChange={(e) => handlePerson(e)}
                >
                  <SelectItem text="Male" value="M" />
                  <SelectItem text="Female" value="F" />
                  <SelectItem text="Other" value="U" />
                </Select>
                <TextInput
                  type="date"
                  className="names-input"
                  placeholder="mm/dd/yyy"
                  labelText="Date of Birth"
                  id="birthdate"
                  onChange={(e) => handlePerson(e)}
                  value={personData.birthdate}
                />
              </div>
              <div className="input2-Group">
                <TextInput
                  className="input2"
                  id="address1"
                  labelText="Address"
                  onChange={(e) => handlePerson(e)}
                  value={personData.address1}
                  required
                />
                <TextInput
                  className="input2"
                  id="cityVillage"
                  labelText="City"
                  onChange={(e) => handlePerson(e)}
                  value={personData.cityVillage}
                  required
                />
                <TextInput
                  className="input2"
                  id="country"
                  labelText="Country"
                  onChange={(e) => handlePerson(e)}
                  value={personData.country}
                  required
                />
                <TextInput
                  className="input2"
                  id="postalCode"
                  labelText="Postal code"
                  onChange={(e) => handlePerson(e)}
                  value={personData.postalCode}
                  required
                />
              </div>

              <Button type="submit" className="saveButton">
                Register Person
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="register-patient">
        <form className="registerPatientForm" onSubmit={submitPatienInfo}>
          <div className="addPerson">
            <div className="add-person-1">
              <TextInput
                required
                labelText="Identifier/ ID number"
                id="identifier"
                onChange={(e) => handlePatient(e)}
                value={patientData.identifier}
              />
              <Select
                labelText="Patient Identifier Type"
                required
                onChange={(e) => handlePatient(e)}
                id="identifierType"
              
              >
                {items.map((list) => (
                  <SelectItem text={list.label} key={list.id} value={list.id} />
                ))}
              </Select  >
              <Select
                labelText="Location"
                required
                onChange={(e) => handlePatient(e)}
                id="location"
              >
                {location.map((list) => (
                  <SelectItem text={list.label} key={list.id} value={list.id} />
                ))}
              </Select>
            </div>

            <Button type="submit" className="btn-createPatient">
              Create Patient
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddPatient;
