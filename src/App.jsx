import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Beers from "./pages/Beers/Beers";
import Contact from "./pages/Contact/Contact";
import Us from "./pages/Us/Us";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/us" element={<Us />} />
      </Routes>
    </Router>
  );
}

export default App;
