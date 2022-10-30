import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CollapsibleExample from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Pricing from "./Components/Pricing/Pricing";
import Services from "./Components/ServicesLittle/Services";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Header />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
