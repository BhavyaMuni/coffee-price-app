import { Container, Typography } from "@mui/material";
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line } from "recharts";

function DisplayResponse({ response }) {
  if (response == null || response === "") {
    return <Typography variant="body"> Please select a valid date.</Typography>;
  } else {
    return (
      <div>
        <p>
          <Typography variant="body">Open: {response.open}</Typography>
        </p>
        <p>
          <Typography variant="body">Close: {response.close}</Typography>
        </p>
        <p>
          <Typography variant="body">Low: {response.low}</Typography>
        </p>
        <p>
          <Typography variant="body">High: {response.high}</Typography>
        </p>
        <p>
          <Typography variant="body">
            Predicted Close: {response.predicted}
          </Typography>
        </p>
        <Container>
          <ResponsiveContainer width={500} height={300}>
            <LineChart
              data={() => {
                // response.previous.push({ close: response.predicted });
                return response.previous;
              }}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line dataKey="close" stroke="#8884d8"></Line>
              {/* <Line dataKey="close" stroke="#82ca9d"></Line> */}

              <XAxis
                dataKey="date"
                tickFormatter={(tick) => {
                  return new Date(tick).toDateString().slice(4);
                }}
              />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </Container>
      </div>
    );
  }
}

export default DisplayResponse;
