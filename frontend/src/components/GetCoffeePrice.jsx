import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Button, Typography } from "@mui/material";
const axios = require("axios");

function InputDate() {
  const [date, setDate] = useState(new Date("2000 - 01 - 03"));
  const [res, setRes] = useState(null);

  const logApi = (dateString) => {
    axios.get("/api/records/" + dateString).then((res) => setRes(res.data));
    // console.log(dateString);
  };

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          shouldDisableDate={disableWeekends}
          minDate={new Date("2000-01-03")}
          maxDate={new Date("2022-07-09")}
          value={date}
          label="Basic example"
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
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
        {/* <h1>{date.toDateString()}</h1> */}
      </LocalizationProvider>
      <DisplayResponse response={res} />
    </div>
  );
}

export default InputDate;

export function DisplayResponse({ response }) {
  if (response == null || response === "") {
    return <Typography variant="body"> Please select a valid date.</Typography>;
  } else {
    return (
      <div>
        <Typography variant="body">{response.open}</Typography>
        <Typography variant="body">{response.close}</Typography>
        <Typography variant="body">{response.low}</Typography>
        <Typography variant="body">{response.high}</Typography>
      </div>
    );
  }
}
// export DisplayResponse;
