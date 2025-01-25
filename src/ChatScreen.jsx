import React, { useState, useEffect } from "react";
import "./ChatScreen.css";
import { FaPaperPlane, FaArrowLeft, FaPlus } from "react-icons/fa"; // Added FaPlus for upload icon
import { db, firestore } from "./firebaseConfig"; // Import Firestore and Realtime Database
import { ref, onValue, push } from "firebase/database";
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { auth } from "./firebaseConfig"; // Import Firebase auth for current user

const ChatScreen = ({ goToAdmin }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useState({}); // Track current user info
  const [selectedFile, setSelectedFile] = useState(null); // Track the uploaded file

  // Fetch current user's data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(firestore, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({
              uid: user.uid,
              name: userData.firstName || user.email, // Use first name if available, fallback to email
            });
          } else {
            setCurrentUser({
              uid: user.uid,
              name: user.email, // Fallback to email if no Firestore data
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      }
    };

    fetchUserData();
  }, []);

  // Fetch messages from Firebase Realtime Database in real-time
  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setMessages(messagesArray);
    });
  }, []);

  // Handle sending a message
  const handleSend = () => {
    if (input.trim() || selectedFile) {
      const messagesRef = ref(db, "messages");
      push(messagesRef, {
        text: input || "File attached", // Message text or file placeholder
        fileUrl: selectedFile || null, // Add the file URL if uploaded
        timestamp: Date.now(),
        sender: currentUser.name, // Send current user's name or email
      });
      setInput("");
      setSelectedFile(null); // Clear the selected file
    }
  };

  // Handle file selection
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // For now, we'll just set the file name (integrate storage for real uploads)
      setSelectedFile(file.name); // Replace this with file URL after uploading to Firebase Storage
    }
  };

  return (
    <div className="chat-container">
      {/* Back icon */}
      <FaArrowLeft className="back-icon" onClick={goToAdmin} />

      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`chat-message ${
                message.sender === currentUser.name ? "own-message" : ""
              }`}
            >
              <p className="sender-name">{message.sender || "Anonymous"}</p>
              <p className="message-text">{message.text}</p>
              {message.fileUrl && (
                <p className="file-attachment">
                  <a href={message.fileUrl} target="_blank" rel="noopener noreferrer">
                    View attachment
                  </a>
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet. Start chatting!</p>
        )}
      </div>

      <div className="chat-footer">
        <div className="chat-input-container">
          <label htmlFor="file-upload" className="upload-icon">
            <FaPlus />
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <FaPaperPlane className="send-icon" onClick={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
