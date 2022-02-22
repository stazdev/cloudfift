import "./App.css";
import Customer from "./components/FeaturedCustomer/Customer";
import Vendor from "./components/FeaturedVendor/Vendor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import User from "./components/UserComment/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Customer />
      <User />
      <Vendor />
    </div>
  );
}

export default App;
