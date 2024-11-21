import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import Cervezas from "./pages/Cervezas/Cervezas";
import Contacto from "./pages/Contacto/Contacto";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cervezas" element={<Cervezas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
