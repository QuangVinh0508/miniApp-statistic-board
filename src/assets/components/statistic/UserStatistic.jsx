import React from "react";

//BS
import Form from "react-bootstrap/Form";

//Components
import SimpleTable from "./SimpleTable";

//hooks
import { useGetStatistic } from "../../hooks/useGetStatistic";

const headers = [
  { label: 'First Name' },
  { label: 'Last Name' },
  { label: 'Email' },
]

function UserStatistic() {
  const {data, setLimit} = useGetStatistic({
    url: 'https://fakestoreapi.com/users'
  });

  return (
    <div>
      <div>
        Limit:
        <Form.Select aria-label="Default select example" onChange={e => setLimit(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </Form.Select>
      </div>

      <SimpleTable
        headers={headers}
        data={data}
        renderRow={(row) => {
          return ( 
            <tr key={row.id}>
              <td>{row.name.firstname}</td>
              <td>{row.name.lastname}</td>
              <td>{row.email}</td>
            </tr>
          );
        }}
      />
    </div>
  );
}

export default UserStatistic;
