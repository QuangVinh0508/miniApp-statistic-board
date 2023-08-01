import React from "react";
import Table from "react-bootstrap/Table";

function SimpleTable({ headers = [], data = [], renderRow}) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
            {data.map(item => renderRow(item))}
      </tbody>
    </Table>
  );
}

export default SimpleTable;
