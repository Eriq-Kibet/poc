import { Modal } from "carbon-components";
import React, { useState } from "react";
import { FaceAdd32 } from "@carbon/icons-react";
import "./patientRegistration.component.css";

import {
  Button,
  DatePicker,
  DatePickerInput,
  TextInput,
} from "carbon-components-react";

function AddPatient() {
  const [data, setData] = useState({
    givenName: "",
    familyName: "",
    gender: "",
    birthdate: "",
    address1: "",
    cityVillage: "",
    country: "",
    postalCode: "",
  });
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const submitPatientInfo = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div>
      <div className="registerPatient">
        <p className="addText">
          <FaceAdd32 />
          Register Patient
        </p>
        <form className="addPatientForm" onSubmit={submitPatientInfo}>
          <div className="column">
            <div className="names">
              <TextInput
                id="givenName"
                labelText="First Name"
                onChange={(e) => handle(e)}
                value={data.givenName}
                required
              />
              <TextInput
                id="familyName"
                labelText="Middle Name"
                onChange={(e) => handle(e)}
                value={data.familyName}
                required
              />
            </div>
            <TextInput
              id="gender"
              labelText="Gender"
              onChange={(e) => handle(e)}
              value={data.gender}
              required
            />
            <DatePicker datePickerType="single">
              <DatePickerInput
                placeholder="mm/dd/yyy"
                labelText="Date of Birth"
                id="birthdate"
                onChange={(e) => handle(e)}
                value={data.birthdate}
                required
              />
            </DatePicker>

            <TextInput
              id="address1"
              labelText="Address"
              onChange={(e) => handle(e)}
              value={data.address1}
              required
            />
            <TextInput
              id="cityVillage"
              labelText="City"
              onChange={(e) => handle(e)}
              value={data.cityVillage}
              required
            />
            <TextInput
              id="country"
              labelText="Country"
              onChange={(e) => handle(e)}
              value={data.country}
              required
            />
            <TextInput
              id="postalCode"
              labelText="Postal code"
              onChange={(e) => handle(e)}
              value={data.postalCode}
              required
            />

            <Button type="submit" className="saveButton">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddPatient;
