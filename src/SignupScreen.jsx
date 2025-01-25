import React, { useState, useRef } from "react";
import "./SignupScreen.css";
import { firestore } from "./firebaseConfig"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

const SignupScreen = ({ onSignupComplete, goToLogin }) => {
  const [phoneParts, setPhoneParts] = useState(Array(10).fill("")); // State for the 10 text boxes
  const hiddenInputRef = useRef(null); // Reference to the hidden input field

  const handleInputChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      // Ensure only one digit is entered
      const newPhoneParts = [...phoneParts];
      newPhoneParts[index] = value;
      setPhoneParts(newPhoneParts);
    }
  };

  const handleHiddenInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length >= 10) {
      // Extract the last 10 digits (e.g., from "+1")
      const digits = value.slice(-10).split("");
      setPhoneParts(digits); // Populate phoneParts with the digits
    }
  };

  const handleSignup = async () => {
    const phoneNumber = `(${phoneParts.slice(0, 3).join("")}) ${phoneParts
      .slice(3, 6)
      .join("")}-${phoneParts.slice(6).join("")}`;

    if (phoneParts.every((part) => part !== "")) {
      try {
        // Save the phone number to Firestore
        await addDoc(collection(firestore, "subscribers"), { phoneNumber });
        alert(`Phone number ${phoneNumber} has been submitted!`);
        onSignupComplete(); // Navigate to the next screen
      } catch (error) {
        console.error("Error saving phone number:", error.message);
        alert("Failed to save phone number. Please try again.");
      }
    } else {
      alert("Please complete the phone number.");
    }
  };

  return (
    <div className="signup-container">
      <h1>Lucidus Fidelis Alerts</h1>
      <p>Enter your phone number to receive new updates and daily deals:</p>

      {/* Hidden input to capture the full phone number via autocomplete */}
      <input
        type="tel"
        className="hidden-phone-input"
        ref={hiddenInputRef}
        autoComplete="tel"
        onInput={handleHiddenInputChange} // Triggered when autocomplete fills the input
        placeholder="Enter phone number"
      />

      {/* Phone number input fields */}
      <div className="phone-number-container">
        <div className="area-code-container">
          <label className="area-code-label">Area Code</label>
          <div className="area-code-input">
            <span className="phone-area-code">(</span>
            {phoneParts.slice(0, 3).map((digit, index) => (
              <input
                key={index}
                className="phone-box"
                type="text"
                value={digit || ""} // Display the digit
                maxLength={1}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onFocus={() => hiddenInputRef.current.focus()} // Ensure hidden input gets focus
              />
            ))}
            <span className="phone-area-code">)</span>
          </div>
        </div>
        <div className="rest-of-number-container">
          {phoneParts.slice(3, 6).map((digit, index) => (
            <input
              key={index + 3}
              className="phone-box"
              type="text"
              value={digit || ""} // Display the digit
              maxLength={1}
              onChange={(e) => handleInputChange(index + 3, e.target.value)}
              onFocus={() => hiddenInputRef.current.focus()} // Ensure hidden input gets focus
            />
          ))}
          <span className="phone-hyphen">-</span>
          {phoneParts.slice(6).map((digit, index) => (
            <input
              key={index + 6}
              className="phone-box"
              type="text"
              value={digit || ""} // Display the digit
              maxLength={1}
              onChange={(e) => handleInputChange(index + 6, e.target.value)}
              onFocus={() => hiddenInputRef.current.focus()} // Ensure hidden input gets focus
            />
          ))}
        </div>
      </div>
      <button className="signup-button" onClick={handleSignup}>
        Sign Up
      </button>
      <div className="link-container">
        <button className="login-link" onClick={goToLogin}>
          Go to Login Page
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
