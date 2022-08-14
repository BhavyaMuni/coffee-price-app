import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Button, Container, Grid } from "@mui/material";
import DisplayResponse from "./DisplayResponse";
const axios = require("axios");

function InputDate() {
  const [date, setDate] = useState(new Date("2000-01-04"));
  const [res, setRes] = useState(null);

  const logApi = (dateString) => {
    axios.get("/api/records/" + dateString).then((res) => setRes(res.data));
    // console.log(dateString);
  };

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <Grid
      container
      direction={"column"}
      alignContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item>
        <DatePicker
          shouldDisableDate={disableWeekends}
          minDate={new Date("2000-01-03")}
          maxDate={new Date("2022-07-09")}
          value={date}
          //   label=""
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={() =>
            logApi(
              `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
                -2
              )}-${("0" + date.getDate()).slice(-2)}`
            )
          }
        >
          {" "}
          Submit!
        </Button>
      </Grid>
      <Grid item>
        <DisplayResponse response={res} />
      </Grid>
    </Grid>
  );
}

export default InputDate;
