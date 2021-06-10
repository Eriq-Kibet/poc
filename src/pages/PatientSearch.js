import React from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    Search
} from 'carbon-components-react';
const rows = [
    {
        id: 'load-balancer-1',
        patientid:'45545df',
        name: 'Errr',
        age: 20,
        gender: 'Starting',
        contact: '07222111212'
    }
];
const headers = ['Patient ID','Name', 'Age', 'Gender', 'Contact'];


function PatientSearch() {
    return (
        <div>
            <Search className="searchBar" placeholder="Patient Identifier/ Patient Name"/>
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
                                .filter((key) => key !== 'id')
                                .map((key) => {
                                    return <TableCell key={key}>{row[key]}</TableCell>;
                                })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
  

        </div>


    )

}
export default PatientSearch;