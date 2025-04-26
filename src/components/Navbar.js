import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
// import SnehalLogo from './SnehalLogo.svg';
import TypingName from './TypingName';


const Navbar = () => {
  const [active, setActive] = useState('Academics');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home','Contact', 'Github', 'Projects', 'Academics'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <h2 className="logo"> */}
        <TypingName />
        {/* </h2> */}

        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`nav-list ${mobileMenuOpen ? 'mobile-show' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item}
              className={`nav-item ${active === item ? 'active' : ''}`}
              onClick={() => {
                setActive(item);
                setMobileMenuOpen(false); // close menu after click

                const section = document.getElementById(item.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
