import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsPage.css'; // Import the custom CSS

const DetailsPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [relationship, setRelationship] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Wishes Page with user data
    navigate('/sure', {
      state: { name, age, relationship },
    });
  };

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 500); // Delay the animation to make elements drop in
  }, []);

  return (
    <div className="details-page-container">
      <div className={`form-container ${showForm ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h1 className="text-center mb-4 animate__animated animate__fadeInUp">Fill Out Your Details</h1>
        <form onSubmit={handleSubmit}>
          <div className={`mb-3 animate__animated animate__fadeInUp ${showForm ? 'animate__delay-1s' : ''}`}>
            <label htmlFor="name" className="form-label">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className={`mb-3 animate__animated animate__fadeInUp ${showForm ? 'animate__delay-1.5s' : ''}`}>
            <label htmlFor="age" className="form-label">Your Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className={`mb-3 animate__animated animate__fadeInUp ${showForm ? 'animate__delay-2s' : ''}`}>
            <label htmlFor="relationship" className="form-label">What relation do you hold to me?</label>
            <input
              type="text"
              id="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 animate__animated animate__fadeInUp animate__delay-2.5s"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;
