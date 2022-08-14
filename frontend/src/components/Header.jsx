import { Container, Typography } from "@mui/material";

function Header() {
  return (
    <Container className="Header">
      <Typography variant="h1">Coffee Price Predictor</Typography>
      <Typography variant="subtitle1">by, Bhavya Muni</Typography>
    </Container>
  );
}

export default Header;
