import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import MainScreen from "./MainScreen";
import ChatScreen from "./ChatScreen";
import ProfilePage from "./ProfilePage"; // Import ProfilePage
import { auth } from "./firebaseConfig"; // Import Firebase authentication
import { onAuthStateChanged, signOut } from "firebase/auth";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks user authentication state
  const [currentPage, setCurrentPage] = useState("signup"); // Set initial page to "signup"

  // Listen for Firebase Authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentPage("admin"); // Go to MainScreen if authenticated
      } else {
        setIsAuthenticated(false);
        setCurrentPage("signup"); // Go to SignupScreen if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsAuthenticated(false);
      setCurrentPage("login"); // Redirect to SignupScreen on logout
    });
  };

  return (
    <>
      {currentPage === "login" && (
        <LoginScreen
          onLoginSuccess={() => setCurrentPage("admin")} // Navigate to MainScreen on success
          goToSignup={() => setCurrentPage("signup")} // Navigate to SignupScreen
        />
      )}
      {currentPage === "signup" && (
        <SignupScreen
          onSignupComplete={() => setCurrentPage("admin")} // Navigate to MainScreen on success
          goToAdmin={() => setCurrentPage("admin")} // Admin navigation
          goToLogin={() => setCurrentPage("login")} // Navigate back to LoginScreen
        />
      )}
      {currentPage === "admin" && (
  <MainScreen
    goToChat={() => setCurrentPage("chat")}
    goToProfile={() => setCurrentPage("profile")}
    onLogout={handleLogout}
    goToSignup={() => setCurrentPage("signup")} // Navigate to SignupScreen
  />
)}

      {currentPage === "chat" && (
        <ChatScreen goToAdmin={() => setCurrentPage("admin")} />
      )}
      {currentPage === "profile" && (
        <ProfilePage
          goToMainScreen={() => setCurrentPage("admin")}
          goToSignupPage={() => setCurrentPage("signup")} // Navigation back to SignupScreen
        />
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
