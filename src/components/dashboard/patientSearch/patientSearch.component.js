import React, { useState } from "react";
import "./patientSearch.component.css";
import {
  Table,
  DataTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Search,
  TableContainer,
} from "carbon-components-react";
import { SearchPatient } from "./patientSearch.resource";
import { _PaginationNav } from "../../navigation/pagination.component";
const headers = [
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  { key: "gender", header: "Gender" },
  { key: "dob", header: "Date of Birth" },
];


function PatientSearch() {
  const [patientName, setPatientName] = useState("");

  const [data, setData] = useState([]);

  const handleSearchChange = (e) => {
    setPatientName(e.target.value);
    // console.log(patientName);
    SearchPatient(patientName).then((resp) => {
      const results = resp.map((patient) => {
        return {
          id: patient.uuid,
          name: patient.person.display,
          age: patient.person.age,
          gender: patient.person.gender,
          dob: patient.person.birthdate,
        };
      });
      setData(results);
    });
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <Search
        labelText="search"
        value={patientName}
        className="searchBar"
        placeholder="Patient Identifier/ Patient Name"
        onChange={handleSearchChange}
      />

      <div>
        <DataTable rows={data} headers={headers}>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer
              title="Patient search results"
              description={`${data.length} patients found`}
            >
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
      <_PaginationNav />
    </div>
  );
}
export default PatientSearch;
