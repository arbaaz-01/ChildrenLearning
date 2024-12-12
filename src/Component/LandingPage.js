import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import "./css/LandingPage.css";

const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1>Welcome to Learning Hub</h1>
        <p>"Learning is the treasure that will follow its owner everywhere."</p>
      </div>
      <div className="form-container">
        <div className="form-toggle">
          <button 
            onClick={toggleForm} 
            className={showSignup ? "active" : ""}
          >
            Signup
          </button>
          <button 
            onClick={toggleForm} 
            className={!showSignup ? "active" : ""}
          >
            Sign-in
          </button>
        </div>
        <div className="form-content">
          {showSignup ? <Signup /> : <Signin />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
