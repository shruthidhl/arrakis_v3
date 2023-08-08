import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./LoginStyle.css";
//import { useNavigate } from 'react'
import { useNavigate } from "react-router-dom";
import { login } from "../services/user-service";
//import { redirect } from "react-router-dom";


export default function Login() {
  // React States
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const changeEmail = e => {
    setEmail(e.target.value);
  }

  const changePassword = e => {
    setPassword(e.target.value);
  }


  const handleSubmit = (event) => {
  
    event.preventDefault();
    const credentials = {
      "email": email,
      "password": password
    }
    console.log(credentials);
    login(credentials)
    .then(res => {
      localStorage.setItem("auth", true);
      console.log(email);
      localStorage.setItem("email", email);
      navigate("/home")
    })
    .catch(err => {
      localStorage.setItem("auth", false);
      console.log(err);
    })
  }

  
  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => 
  //   user.username === uname.value);
  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "error", message: 'Invalid username or password'});
  //     } else {
  //       setIsSubmitted(true);
  //       navigate("/newbonds");
  //       //return redirect("/dummy");
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "error", message: 'Invalid username or password'});
  //   }
  // };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form"> {renderErrorMessage("error")}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required onChange={changeEmail}/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={changePassword}/>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}