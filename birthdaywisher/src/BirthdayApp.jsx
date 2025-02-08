import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BirthdayApp.css';

const BirthdayAppPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, age, relationship } = location.state || {};

  const [showWish, setShowWish] = useState(false);
  const [boxColor, setBoxColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const getOrdinalSuffix = (num) => {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) {
      return `${num}st`;
    }
    if (j === 2 && k !== 12) {
      return `${num}nd`;
    }
    if (j === 3 && k !== 13) {
      return `${num}rd`;
    }
    return `${num}th`;
  };

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWish(true);
    }, 500);

    // Colors for both background and box
    const colors = [
      '#ffeb3b', // warm yellow
      '#ff5722', // vibrant orange
      '#4caf50', // fresh green
      '#2196f3', // bright blue
      '#9c27b0', // purple
      '#f44336', // red
      '#3f51b5', // indigo
      '#00bcd4', // cyan
    ];

    let bgColorIndex = Math.floor(Math.random() * colors.length);
    let boxColorIndex = Math.floor(Math.random() * colors.length);

    // Ensure bgColor and boxColor are not the same
    while (bgColorIndex === boxColorIndex) {
      boxColorIndex = Math.floor(Math.random() * colors.length);
    }

    // Set random background color and box color
    setBgColor(colors[bgColorIndex]);
    setBoxColor(colors[boxColorIndex]);

    // Interval to change colors every second
    const colorInterval = setInterval(() => {
      bgColorIndex = Math.floor(Math.random() * colors.length);
      boxColorIndex = Math.floor(Math.random() * colors.length);

      // Ensure bgColor and boxColor are not the same
      while (bgColorIndex === boxColorIndex) {
        boxColorIndex = Math.floor(Math.random() * colors.length);
      }

      setBgColor(colors[bgColorIndex]);
      setBoxColor(colors[boxColorIndex]);
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    // Fireworks effect
    const startFireworks = () => {
      const fireworks = document.createElement('div');
      fireworks.classList.add('fireworks');
      document.body.appendChild(fireworks);

      setTimeout(() => {
        fireworks.remove();
      }, 3000);
    };

    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    const fireworksInterval = setInterval(startFireworks, 2000);

    // Clear fireworks after a while
    setTimeout(() => {
      clearInterval(fireworksInterval);
    }, 10000);

    return () => clearInterval(fireworksInterval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor, // Random background color
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 1s ease-in-out',
      }}
    >
      <audio autoPlay loop>
      <source src="https://pagallworld.co.in/wp-content/uploads/2023/06/I-Wish-U-Happy-Happy-Birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* Falling Emojis */}
        <div
          className="falling-heart"
          style={{
            animation: 'fall 2s infinite linear, bounce 1s infinite alternate',
            position: 'absolute',
            top: '10%',
            left: '20%',
          }}
        >
          ❤️
        </div>
        <div
          className="falling-heart"
          style={{
            animation: 'fall 2s infinite linear, bounce 1s infinite alternate',
            position: 'absolute',
            top: '30%',
            left: '50%',
          }}
        >
          💖
        </div>
        <div
          className="falling-heart"
          style={{
            animation: 'fall 2s infinite linear, bounce 1s infinite alternate',
            position: 'absolute',
            top: '50%',
            left: '80%',
          }}
        >
          💘
        </div>

        {/* Additional Falling Emojis */}
        <div
          className="falling-cake"
          style={{
            animation: 'fall 3s infinite linear, zoomIn 2s infinite',
            position: 'absolute',
            top: '20%',
            left: '30%',
          }}
        >
          🎂
        </div>
        <div
          className="falling-cake"
          style={{
            animation: 'fall 3s infinite linear, zoomIn 2s infinite',
            position: 'absolute',
            top: '40%',
            left: '60%',
          }}
        >
          🍰
        </div>

        {/* New Falling Balloons */}
        <div
          className="falling-balloon"
          style={{
            animation: 'fall 2s infinite linear, bounce 1s infinite alternate',
            position: 'absolute',
            top: '60%',
            left: '10%',
          }}
        >
          🎈
        </div>
        <div
          className="falling-balloon"
          style={{
            animation: 'fall 2s infinite linear, bounce 1s infinite alternate',
            position: 'absolute',
            top: '70%',
            left: '50%',
          }}
        >
          🎈
        </div>

        {/* New Falling Stars */}
        <div
          className="falling-star"
          style={{
            animation: 'fall 1.5s infinite linear, sparkle 0.5s infinite alternate',
            position: 'absolute',
            top: '5%',
            left: '75%',
          }}
        >
          ✨
        </div>
        <div
          className="falling-star"
          style={{
            animation: 'fall 1.5s infinite linear, sparkle 0.5s infinite alternate',
            position: 'absolute',
            top: '90%',
            left: '40%',
          }}
        >
          🌟
        </div>
      </div>

      <div
        style={{
          animation: 'fadeIn 1s, bounce 1s infinite',
          animationDelay: '1s',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '1rem 2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            backgroundColor: boxColor, // Changing box color
            border: '4px solid white',
            maxWidth: '500px',
            margin: '2rem auto',
            animation: 'zoomIn 1s',
          }}
        >
          <h1
            style={{
              fontSize: '2rem', // Smaller text size
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Birthday Wish for {name}
          </h1>
          <div
            style={{
              fontSize: '1.25rem', // Slightly smaller text size
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#ffffff',
              letterSpacing: '0.5px',
              textAlign: 'center',
              marginTop: '1rem',
              transition: 'opacity 2s',
              opacity: showWish ? 1 : 0,
              animation: showWish ? 'fadeIn 2s' : '',
              animationDelay: '2s',
            }}
          >
            {showWish && (
              <p>
                🎉 **Happy {getOrdinalSuffix(age)} Birthday, dear {relationship}!** 🎉
                <br />
                Wishing you a day filled with joy, laughter, and all the things that make you smile.
                <br />
                It's incredible to see how far you've come and the amazing person you've become.
                <br />
                I'm so grateful to have you in my life. Cheers to many more fantastic years ahead!
              </p>
            )}
          </div>

          {/* Stop Button */}
          <button
            onClick={handleBack}
            style={{
              animation: 'bounceIn 1s, zoomIn 1s',
              animationDelay: '2s',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              fontSize: '1.25rem',
              backgroundColor: '#ff6347',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayAppPage;
