import "./App.css";
import CoffeePrice from "./components/GetCoffeePrice";
import { ChakraProvider, Input } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <h1>Hello, worlds</h1>
      <CoffeePrice></CoffeePrice>
    </ChakraProvider>
  );
}

export default App;
