import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import { firestore } from "./firebaseConfig"; // Import Firestore
import { auth } from "./firebaseConfig"; // Import Firebase Auth
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; // Firestore methods
import { signOut } from "firebase/auth"; // Firebase sign-out method
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const MainScreen = ({ goToProfile, goToChat, onLogout, goToSignup }) => {
  const [userName, setUserName] = useState(""); // User's name
  const [subscribers, setSubscribers] = useState([]); // Store subscriber list

  // Fetch the user's first name from Firestore or auth.currentUser
  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser; // Get the currently logged-in user
      if (user) {
        try {
          // Try to fetch user data from Firestore
          const userDoc = await getDoc(doc(firestore, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserName(data.firstName || "User"); // Use firstName if available
          } else {
            // Fallback to auth displayName if Firestore data is missing
            setUserName(user.displayName || "User");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
          setUserName("User"); // Fallback in case of an error
        }
      }
    };

    fetchUserDetails();
  }, []);

  // Fetch the list of subscribers from Firestore
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "subscribers"));
        const subscriberList = querySnapshot.docs.map((doc) => doc.data().phoneNumber);
        setSubscribers(subscriberList);
      } catch (error) {
        console.error("Error fetching subscribers:", error.message);
      }
    };

    fetchSubscribers();
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully.");
        onLogout(); // Redirect to login screen
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
      });
  };

  return (
    <div className="main-container">
      {/* User Info Section */}
      <div className="user-info">
        <p>Welcome, {userName}!</p>
        <FaUserCircle
          className="profile-icon"
          onClick={goToProfile} // Navigate to Profile Page
          title="Go to Profile"
        />
      </div>

      {/* Composer Section */}
      <div className="composer-section">
        <h1>Admin Page: Lucidus Fidelis</h1>
        <textarea
          className="message-box"
          placeholder="Write your message here..."
        ></textarea>
        <button className="send-button">Send Message</button>
      </div>

      {/* Subscriber Numbers Section */}
      <div className="dummy-numbers-section">
        <h2>Subscribers</h2>
        <ul className="dummy-numbers">
          {subscribers.length > 0 ? (
            subscribers.map((number, index) => <li key={index}>{number}</li>)
          ) : (
            <p>No subscribers yet.</p>
          )}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="chat-link-container">
        <button className="chat-link" onClick={goToChat}>
          Chat
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <button className="signup-button" onClick={goToSignup}>
          Go To Sign Up Page
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
