import React from 'react';
import './MainScreen.css';

const MainScreen = () => {
  return (
    <div className="main-container">
      <div className="composer-section">
        <h1>Lucidus Fidelis</h1>
        <textarea
          className="message-box"
          placeholder="Write your message here..."
        ></textarea>
        <button className="send-button">Send Message</button>
      </div>
      <div className="dummy-numbers-section">
        <h2>Subscribers</h2>
        <ul className="dummy-numbers">
          <li>+1 555-123-4567</li>
          <li>+1 555-234-5678</li>
          <li>+1 555-345-6789</li>
          <li>+1 555-456-7890</li>
          <li>+1 555-567-8901</li>
        </ul>
      </div>
    </div>
  );
};

export default MainScreen;

