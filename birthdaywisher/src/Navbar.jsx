import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Custom CSS file for better styling

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleStop = () => {
    // Redirect to home or other relevant page when "Stop" is clicked
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">Birthday Wisher</span>
        {location.pathname === '/BirthdayApp' && (
          <button className="btn-stop" onClick={handleStop}>
            Stop
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
