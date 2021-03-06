import "./patientEncounters.component.css";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  Pagination,
  Button,
} from "carbon-components-react/";
import { EncountersDisplay } from "./patientEncounters.resource";
import { useParams } from "react-router";

const headers = [
  { key: "encounterType", header: "Encounter Type" },
  { key: "encounterDateTime", header: "Encounter Date" },
  { key: "location", header: "Location" },
];
function Encounters() {
  const [currentPage, setcurrentPage] = useState(5);
  const [rowIndex, setRowIndex] = useState(0);
  const [rows, setrows] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.patientuuid) {
      EncountersDisplay(params.patientuuid).then((resp) => {
        const results = resp.map((encounter) => {
          return {
            id: encounter.uuid,
            encounterType: encounter.encounterType.display,
            encounterDateTime: encounter.encounterDatetime,
            location: encounter.location.display,
          };
        });
        setrows(results);
      });
    }
  }, [params.patientuuid]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="encounterTable">
      <div>
        <DataTable
          rows={rows.slice(rowIndex, rowIndex + currentPage)}
          headers={headers}
          isSortable
        >
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
            <TableContainer
              title="Patient Encounters"
              description={`${rows.length} Encounters found`}
            >
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader
                        key={rows.id}
                        {...getHeaderProps({ header })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={rows.id} {...getRowProps({ row })}>
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
        <div style={{ width: "100%" }}>
          <Pagination
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            page={1}
            pageNumberText="Page Number"
            pageSize={currentPage}
            pageSizes={[5, 10, 15, 20, 25]}
            totalItems={rows.length}
            onChange={({ page, pageSize }) => {
              if (pageSize !== currentPage) {
                setcurrentPage(pageSize);
              }
              setRowIndex(pageSize * (page - 1));
            }}
          />
        </div>
        {rows.length > 0 && (
          <div>
            <Button onClick={handlePrint}>Print this out</Button>
            <Table ref={componentRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Encounters;
