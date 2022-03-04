import "./App.css";
import Customer from "./components/FeaturedCustomer/Customer";
import Vendor from "./components/FeaturedVendor/Vendor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import User from "./components/UserComment/User";
import VendorComment from "./components/VendorComment/VendorComment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Customer />
      <User />
      <Vendor />
      <VendorComment />
      <Footer />
    </div>
  );
}

export default App;
