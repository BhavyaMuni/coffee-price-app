import React, { useEffect, useState } from "react";

function CoffeePrice() {
  const [appState, setAppState] = useState({
    res: null,
    loading: false,
  });

  const callApi = async () => {
    const response = await fetch("http://localhost:8000/records/2000-01-04");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  useEffect(() => {
    callApi();
  });

  //   return <p>{this.state.res}</p>;
}

export default CoffeePrice;
