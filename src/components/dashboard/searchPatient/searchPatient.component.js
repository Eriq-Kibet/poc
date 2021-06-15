import React, { useState } from "react";
import "./searchPatient.component.css";
import { useHistory } from "react-router";
// import AuthenticateSearch from "./searchPatient.resource";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Search,
  Button,
} from "carbon-components-react";
import ReactTable from 'react-table'
import Navbar from "../navigation/navbar.component";
import { SearchPatient } from "./searchPatient.resource";
import { _PaginationNav } from "../navigation/pagination.component";
const rows = [
  {
    id: "",
    name: "",
    age: "",
    gender: "",
    contact: "",
  },
];
const headers = ["Name", "Age", "Gender"];

function PatientSearch() {
  const [patientName, setPatientName] = useState("");
  const history = useHistory();
  window.sessionStorage.getItem("auth.credentials") === null
    ? history.push("/")
    : console.log("Search Patient");

  const handleSearchChange = (e) => {
    setPatientName(e.target.value);
    console.log(patientName);
    SearchPatient(patientName).then((resp) => console.log(resp));
    //  console.log(sessionStorage)
    //  console.log(sessionId)
    // AuthenticateSearch(username, password).then(({ sessionId }) => {
    //   sessionId ? console.log(sessionId) : console.log("Error");
    // });
  };

  return (
    <div>
      <Navbar />
      <Search
        labelText="search"
        value={patientName}
        className="searchBar"
        placeholder="Patient Identifier/ Patient Name"
        onChange={handleSearchChange}
      />

      <Button>create patient</Button>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {Object.keys(row)
                  .filter((key) => key !== "id")
                  .map((key) => {
                    <TableCell key={key}>{row[key]}</TableCell>;
                  })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
       {/* <ReactTable/> */}
      </div>
    </div>
  );
}
export default PatientSearch;
