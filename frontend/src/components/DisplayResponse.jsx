import { Container, Typography, Grid } from "@mui/material";
// import {  } from "@mui/material/colors";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  HorizontalGridLines,
} from "react-vis";
// import { ResponsiveContainer, XAxis, YAxis, LineChart, Line } from "recharts";

function DisplayResponse({ response }) {
  if (response == null || response === "") {
    return <Typography variant="body"> Please select a valid date.</Typography>;
  } else {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        rowSpacing={8}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography variant="body" textAlign={"center"}>
                Open: {response.open}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body">Close: {response.close}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body">Low: {response.low}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body">High: {response.high}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body">
                Predicted Close: {response.predicted}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <XYPlot width={200} height={200} xType="ordinal">
              <VerticalBarSeries
                color="teal"
                data={[
                  { x: "Close", y: response.close },
                  { x: "Predicted", y: response.predicted },
                ]}
              />
              <XAxis />
              <YAxis />
              <HorizontalGridLines />
            </XYPlot>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <XYPlot width={500} height={300} xType="ordinal">
              <VerticalBarSeries
                color="lightBlue"
                data={[
                  { x: "Open", y: response.open },
                  { x: "Close", y: response.close },
                  { x: "High", y: response.high },
                  { x: "Low", y: response.low },
                ]}
              ></VerticalBarSeries>

              <XAxis title={new Date(response.date).toDateString()} />
              <YAxis />
              <HorizontalGridLines />
            </XYPlot>
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default DisplayResponse;
