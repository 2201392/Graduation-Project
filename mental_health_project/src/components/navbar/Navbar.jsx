// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBrain } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './navbar.css';
//import { useLocation } from 'react-router-dom';

//function Navbar(){
   
  
  
const Navbar = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    'Depression',
    'Generalized Anxiety Disorder',
    'Panic Disorder',
    'Stress Assessment',
    'Eating Disorders',
  ];

  // وظيفة لتبديل حالة القائمة المنسدلة عند النقر على "Tests"
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
    
  // اللوجو (مع أيقونة مؤقتة)
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
          {/* ❌ رابط Home محذوف */}
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#blogs" className="nav-link">Blogs</a></li>
          
          {/* تعديل بند "Tests" ليصبح يحتوي على القائمة المنسدلة */}
          <li className="dropdown-link" 
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)} // فتح عند التمرير
              onMouseLeave={() => setIsDropdownOpen(false)} // إغلاق عند المغادرة
          > 
            <a href="#tests" onClick={(e) => e.preventDefault()} className="nav-link"> 
                Tests 
                <FontAwesomeIcon icon={faChevronDown} size="xs" className="dropdown-arrow" /> {/* أيقونة السهم */}
            </a>
            
            {/* 4. إظهار القائمة المنسدلة شرطياً */}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  {dropdownItems.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* ❌ قسم أزرار Log in و Sign up محذوف */}
         <div className='navbar-actions'>
          <Link to="/Login"><button className='btn btn-login'>Log in</button></Link>
          <Link to="/Signup"><button className='btn btn-signup'>Sign up</button></Link>
          </div>
          
      </nav>
    </header>
  );
};



export default Navbar;
