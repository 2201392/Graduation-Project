// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faBrain, 
  faUser, 
  faSignOutAlt,
  faRobot 
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // حالة المستخدم: true = مسجل دخول، false = غير مسجل
  // دلوقتي هنخليها true عشان نشوف التصميم بعد الدخول (غيريها حسب اللوجيك الحقيقي بعدين)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // غيريها لـ false لو عايزة تشوفي حالة غير مسجل

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    'Depression',
    'Generalized Anxiety Disorder',
    'Panic Disorder',
    'Stress Assessment',
    'Eating Disorders',
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // هنا هتحطي اللوجيك الحقيقي للـ logout (مسح توكن، إلخ)
    setIsLoggedIn(false);
    navigate('/login');
  };

  const Logo = (
    <div className="navbar-logo">
      <span className="logo-text">
        <FontAwesomeIcon icon={faBrain} className="logo-icon" /> 
        TheraMind
      </span>
    </div>
  );

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {Logo}

        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/blogs" className="nav-link">Blogs</Link></li>

          {/* Tests Dropdown */}
          <li 
            className="dropdown-link"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link" onClick={toggleDropdown}>
              Tests 
              <FontAwesomeIcon icon={faChevronDown} size="xs" className="dropdown-arrow" />
            </span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  {dropdownItems.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <Link to={`/tests/${item.toLowerCase().replace(/\s/g, '-')}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* القسم الأيمن: يتغير حسب حالة الدخول */}
        <div className="navbar-right">
          {isLoggedIn ? (
            <>
              {/* حقل البحث */}
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search for doctors..." 
                  className="search-input"
                />
              </div>

              {/* Robot Sessions */}
              <Link to="/robot-sessions" className="nav-link robot-link">
                <FontAwesomeIcon icon={faRobot} /> Robot Sessions
              </Link>

              {/* Profile */}
              <Link to="/profile" className="profile-btn">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </Link>

              {/* Logout */}
              <button onClick={handleLogout} className="logout-btn">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/Login">
                <button className="btn btn-login">Log in</button>
              </Link>
              <Link to="/Signup">
                <button className="btn btn-signup">Sign up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;