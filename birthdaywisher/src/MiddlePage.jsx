import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MiddlePage.css'
const MiddlePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, age, relationship } = location.state || {};

  const handleStart = () => {
    // Redirect to BirthdayApp Page with the user data
    navigate('/birthdayApp', {
      state: { name, age, relationship },
    });
  };

  const handleBack = () => {
    // Redirect back to the Details Page
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-info">
      <div className="bg-white p-5 rounded shadow-lg text-center w-100 w-md-50">
        <h1 className="mb-4">Are you ready for your Birthday wish?</h1>
        <div>
          <button
            onClick={handleStart}
            className="btn btn-success mx-2"
          >
            Start
          </button>
          <button
            onClick={handleBack}
            className="btn btn-secondary mx-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
