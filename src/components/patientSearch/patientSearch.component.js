import React, { useState } from "react";
import "./patientSearch.component.css";
import { useHistory } from "react-router-dom";
import { SearchPatient } from "./patientSearch.resource";

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
  Pagination,
} from "carbon-components-react";
const headers = [
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  { key: "gender", header: "Gender" },
  { key: "dob", header: "Date of Birth" },
];

function PatientSearch() {
  const [currentPage, setcurrentPage] = useState(5);
  const [patientName, setPatientName] = useState("");
  const [rowIndex, setRowIndex] = useState(0);
  const [data, setData] = useState([]);

  const history = useHistory();

  const handleSearchChange = (e) => {
    e.preventDefault();
    setPatientName(e.target.value);
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

  const handleRowClick = (e) => {
    history.push(`/encounters/${e}`);
  };
  const PatientsTable = () => {
    return (
      <div>
        <div className="searchForm">
          <DataTable
            rows={data.slice(rowIndex, rowIndex + currentPage)}
            headers={headers}
            isSortable
          >
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
                      <TableRow
                        onClick={() => handleRowClick(row.id)}
                        key={row.id}
                      >
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
        <div className="searchPagination">
          <Pagination
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            page={1}
            pageNumberText="Page Number"
            pageSize={currentPage}
            pageSizes={[5, 10, 15, 20, 25]}
            totalItems={data.length}
            onChange={({ page, pageSize }) => {
              if (pageSize !== currentPage) {
                setcurrentPage(pageSize);
              }
              setRowIndex(pageSize * (page - 1));
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="mainSearch">
      <div className="searchpatient">
        <h2 className="searchHeading">Search Patient</h2>
        <Search
          labelText="search"
          value={patientName}
          className="searchBar"
          placeholder="Patient Identifier/ Patient Name"
          onChange={handleSearchChange}
        />
        {patientName ==="" ? (
          <p className="enter-name">Enter patients name</p>
        ) : (
          PatientsTable()
        )}
      </div>
    </div>
  );
}
export default PatientSearch;
