import "./App.css";
import Customer from "./components/Customer/Customer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Customer />
    </div>
  );
}

export default App;
