import "./Signin.css";

import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Signin = () => {
  let navigate = useNavigate();
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
        <span>sorry you are not signed in!</span>
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{ marginTop: "8px" }}
          variant="outlined"
        >
          go back to home
        </Button>
      </div>
    );
  }
};

export default Signin;
