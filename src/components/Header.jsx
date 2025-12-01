import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" className="logo-text">CHUUUU___</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/papers" className="nav-link">Papers</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
