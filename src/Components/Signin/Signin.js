import "./Signin.css";

import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { Navigate } from "react-router-dom";

// import Googleimg from "../Images/google.png";

// import { signInWithGoogle } from "../Functions";

const Signin = () => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);

  function checkUserAuthentication() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
      }
    });
  }

  if (IsAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div onLoad={checkUserAuthentication} className="signin_page">
        sorry you are not signed in!
      </div>
    );
  }
  // return (
  //   <div className="signin_page">
  //     {/* <button onClick={signInWithGoogle} className="signin_btn">
  //       Sign-in
  //       <img src={Googleimg} alt="google" className="signin_google_img" />
  //     </button> */}
  //     sorry you are not signed in!
  //   </div>
  // );
};

export default Signin;
