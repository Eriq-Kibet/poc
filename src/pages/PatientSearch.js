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
        name: 'Load Balancer 1',
        rule: 'Round robin',
        Status: 'Starting',
    },
    {
        id: 'load-balancer-2',
        name: 'Load Balancer 2',
        rule: 'DNS delegation',
        status: 'Active',
    },
    {
        id: 'load-balancer-3',
        name: 'Load Balancer 3',
        rule: 'Round robin',
        status: 'Disabled',
    },
];
const headers = ['Name', 'Rule', 'Status'];


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
  );

        </div>


    )

}
export default PatientSearch;