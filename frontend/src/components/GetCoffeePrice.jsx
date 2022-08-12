import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Button } from "@mui/material";

function InputDate() {
  const [date, setDate] = useState(new Date("2000 - 01 - 03"));

  //   useEffect(() => {
  //     console.log(date);
  //   });

  const logApi = (dateString) => {
    fetch("http://localhost:8000/records/" + dateString).then((res) => {
      console.log(res.json());
    });
    // console.log(dateString);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          minDate={new Date("2000-01-03")}
          maxDate={new Date("2022-07-09")}
          label="Basic example"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button
          variant="outlined"
          onClick={logApi(
            `${date.getFullYear()}-${("0" + date.getMonth() + 1).slice(-2)}-${(
              "0" + date.getDate()
            ).slice(-2)}`
          )}
        >
          {" "}
          Submit!
        </Button>
        {/* <h1>{date.toDateString()}</h1> */}
      </LocalizationProvider>
    </div>
  );
}

export default InputDate;
