import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.nav}>
    <Link to="/">RecyCool</Link>

    <div>
      <Link to="/about">About us</Link>
      <Link to="/items">Items</Link>
    </div>
  </nav>
);

export default Navbar;
