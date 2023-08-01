import React from "react";

export function useGetStatistic({url}) {
  const [data, setData] = React.useState([]);
  const [limit, setLimit] = React.useState(5);

  React.useEffect(() => {
    fetch(`${url}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [limit]);

  return {
    data,
    limit,
    setLimit,
    setData
  };
}
