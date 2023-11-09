import "./App.css";
import Home from "./Components//Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Artists from "./Components/Artists/Artists";
import Importance from "./Components/Importance/Importance";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Importance />
      <Artists />
      {/* <Work /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
