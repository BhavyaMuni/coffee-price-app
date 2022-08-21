import { Container } from "@mui/system";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

function Graph30Days() {
  const [data, setData] = useState([
    { close: "10" },
    { close: "12" },
    { close: "14" },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/records/last30days")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Container>
      <ResponsiveContainer width="80%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line dataKey="close"></Line>
          <XAxis
            dataKey="date"
            tickFormatter={(tick) => {
              return new Date(tick).toDateString();
            }}
          />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Graph30Days;
