import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import TypingName from './TypingName';
import ContactPopup from './ContactPopup'; // notice import

const Navbar = () => {
  const [active, setActive] = useState('Academics');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navItems = ['Home', 'Contact', 'Skills', 'Projects', 'Academics'];

  const handleNavClick = (item) => {
    if (item === 'Contact') {
      setIsPopupOpen(true); // open popup
    } else {
      setActive(item);
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <TypingName />

          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          <ul className={`nav-list ${mobileMenuOpen ? 'mobile-show' : ''}`}>
            {navItems.map((item) => (
              <li
                key={item}
                className={`nav-item ${active === item ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Popup modal renders here if open */}
      {isPopupOpen && (
        <ContactPopup onClose={() => setIsPopupOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
