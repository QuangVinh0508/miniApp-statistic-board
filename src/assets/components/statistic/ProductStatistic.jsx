import React from "react";

//BS
import Form from "react-bootstrap/Form";

//Components
import SimpleTable from "./SimpleTable";

//hooks
import { useGetStatistic } from "../../hooks/useGetStatistic";

const headers = [{ label: "Image" }, { label: "Title" }, { label: "Price" }];

function ProductStatistic() {
  const { data, setLimit } = useGetStatistic({
    url: "https://fakestoreapi.com/products",
  });
  return (
    <div>
      <div>
        Limit:
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setLimit(e.target.value)}
        >
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
              <td>
                <img width={50} src={row.image} alt={`product ${row.id}`} />
              </td>
              <td>{row.title}</td>
              <td>{row.price}</td>
            </tr>
          );
        }}
      />
    </div>
  );
}

export default ProductStatistic;
