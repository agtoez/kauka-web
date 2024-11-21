import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>Kauka</Link>
      <Link to="/" className={styles.link}>Inicio</Link>
      <Link to="/nosotros" className={styles.link}>Nosotros</Link>
      <Link to="/cervezas" className={styles.link}>Cervezas</Link>
      <Link to="/contacto" className={styles.link}>Contacto</Link>
    </nav>
  );
}

export default NavBar;
