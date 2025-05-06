// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



// function App() {
 
//   const [message, setMessage] = useState("");

//  useEffect(() => {
//   axios.get("http://localhost:5000/")
//   .then(response => setMessage(response.data))
//   .catch(error => console.error(error));
//  },[]);

//  return (
//   <div>
//     <h1>MERN Stack App</h1>
//     <p>{message}</p>
//    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//     {/* GoogleLogin Button */}
//     <GoogleLogin
//       onSuccess = {(response) => {
//           console.log("Login Success:",response); 
//           alert("Login Successful!");
//         }}
//       onError = {() => {
//         console.log("Login Failed");
//         alert("Login Failed!");
//       }}
//     />
//    </GoogleOAuthProvider>
//   </div>
//  );


// }

// export default App;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </Router>
  );
}