import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";



import "./style.css";


function App() {
  return (
    <div className="gradient__bg">
  <Header />
  <Nav />
  <About />
  <Experience />
  <Services />
  <Portfolio />
  <Contacts />
  <Footer />

  </div>
)
}

export default App;
