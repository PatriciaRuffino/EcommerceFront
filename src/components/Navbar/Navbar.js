import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { CgShoppingBag } from 'react-icons/cg';

// import navbar links from utils
import { navbarLinks } from '../../utils/navbarLinks';

// import logo from assets
import logo from '../../assets/images/logo.png';

// navbar styles
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="site-header">
      {/* bootstrap container class */}
      <div className="container">
        {/* navbar */}
        <nav className="site-header__navbar">
          {/* navbar logo & links */}
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              {/* navbar logo */}
              <Link to="/">
                <img
                  src={logo}
                  alt="company logo"
                  className="site-header__logo"
                />
              </Link>
            </div>
            {/* navbar links */}
            <ul className="site-header__links">
              {/* map through navbarLinks array */}
              {navbarLinks.map((link) => {
                const { id, text, path } = link;
                return (
                  <li key={id}>
                    <Link to={path} className="site-header__link">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* navbar login icon & cart icon */}
          <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                <BiUser className="site-header__icon" />
              </li>
              <li className="site-header__icons-item">
                <CgShoppingBag className="site-header__cart-icon" />
                <span className="site-header__cart-count">22</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
