import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/army">My Army</Link>
    </nav>
  );
}

export default NavBar;
