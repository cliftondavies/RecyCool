import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home </Link>
    <Link to="/about">About us</Link>
    <Link to="/items">Items</Link>
  </nav>
);

export default Navbar;
