import "./App.css";
import InputDate from "./components/GetCoffeePrice";
import Header from "./components/Header";

function App() {
  //   const [date, setDate] = useState(new Date("2000-01-03"));
  return (
    <div>
      <Header />
      <InputDate />
    </div>
  );
}

export default App;
