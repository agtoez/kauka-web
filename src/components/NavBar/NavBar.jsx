import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Inicio</Link>
      <Link to="/us" className={styles.link}>Nosotros</Link>
      <Link to="/beers" className={styles.link}>Cervezas</Link>
      <Link to="/contact" className={styles.link}>Contacto</Link>
    </nav>
  );
}

export default NavBar;
