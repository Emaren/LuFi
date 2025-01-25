import React, { useState, useEffect } from "react";
import { firestore } from "./firebaseConfig"; // Import Firestore
import { auth } from "./firebaseConfig"; // Import Firebase Auth
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"; // Firestore methods

const ProfilePage = ({ goToMainScreen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); // New email state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch user data from Firestore on page load
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser; // Get the currently authenticated user
      if (user) {
        try {
          const userDoc = await getDoc(doc(firestore, "users", user.uid)); // Fetch user data from Firestore
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || ""); // Populate first name
            setLastName(userData.lastName || ""); // Populate last name
            setEmail(user.email || ""); // Populate email from Firebase Authentication
          } else {
            console.log("No user data found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      }
    };

    fetchUserData(); // Call the function when the component mounts
  }, []);

  // Save user data to Firestore
  const handleSave = async () => {
    const user = auth.currentUser; // Get the currently authenticated user
    if (user) {
      try {
        // Save the user details in Firestore
        await setDoc(doc(firestore, "users", user.uid), {
          firstName,
          lastName,
          email,
          createdAt: serverTimestamp(), // Add a timestamp
        });
        setSuccessMessage("Profile updated successfully!");
        setErrorMessage(""); // Clear any previous errors
      } catch (error) {
        setErrorMessage("Failed to update profile: " + error.message);
        setSuccessMessage(""); // Clear any previous success messages
      }
    } else {
      setErrorMessage("No user is logged in.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            color: "#000", // Ensure text is visible
          }}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            color: "#000",
          }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          readOnly
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#e9ecef", // Gray background to indicate it's read-only
            border: "1px solid #ccc",
            color: "#000",
          }}
        />
      </div>
      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Save
      </button>
      <button
        onClick={goToMainScreen}
        style={{
          padding: "10px 20px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Back to Main Screen
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ProfilePage;
