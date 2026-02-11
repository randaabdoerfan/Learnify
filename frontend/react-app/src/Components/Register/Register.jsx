import React, { useState } from "react";
import "./Register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [interests, setInterests] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      setErrorMessage("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (interests.length < 3) {
      setErrorMessage("You must select at least 3 fields of interest.");
      return;
    }

    setErrorMessage("");

    // Send form data to Django API
    const data = {
      username,
      email,
      password,
      interests,
    };

    fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  return (
    <div className="register-page">
      
      <div className="form-container">
        <form onSubmit={handleSubmit} className="register-form">
        <h2>Create Your Account</h2>
          <div className="inputs">
            <label>UserName</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Please enter your name"
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@test.com"
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 6 characters long"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm the previous password"
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit">Register Now!</button>
          </div>
        </form>

        <div className="interest-selection">
          <h2>What do you want to LearnFY Today!</h2>
          <div className="interests-list">
            <label>
              <input
                type="checkbox"
                value="Web Development"
                onChange={handleInterestChange}
              />
              Web Development
            </label>
            <label>
              <input
                type="checkbox"
                value="Data Science"
                onChange={handleInterestChange}
              />
              Data Science
            </label>
            <label>
              <input
                type="checkbox"
                value="UI/UX Design"
                onChange={handleInterestChange}
              />
              UI/UX Design
            </label>
            <label>
              <input
                type="checkbox"
                value="Mobile Development"
                onChange={handleInterestChange}
              />
              Mobile Development
            </label>
            <label>
              <input
                type="checkbox"
                value="AI/ML"
                onChange={handleInterestChange}
              />
              AI/ML
            </label>
            <label>
              <input
                type="checkbox"
                value="Blockchain"
                onChange={handleInterestChange}
              />
              Blockchain
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
