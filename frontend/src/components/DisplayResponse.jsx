import { Typography } from "@mui/material";

function DisplayResponse({ response }) {
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

export default DisplayResponse;
