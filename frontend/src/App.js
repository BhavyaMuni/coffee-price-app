import { Grid } from "@mui/material";
import "./App.css";
import InputDate from "./components/InputDate";
import Header from "./components/Header";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Graph30Days from "./components/Last30Days";

function App() {
  //   const [date, setDate] = useState(new Date("2000-01-03"));
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item md={5} alignSelf={"right"}>
          <Header />
        </Grid>
        <Grid item md={7}>
          <InputDate />
        </Grid>
        <Grid item md={6}>
          {/* <Graph30Days /> */}
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default App;
