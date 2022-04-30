import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ShoesID from "./Components/ShoesID/[ShoesID]";
import Shoes from "./Pages/Shoes";
import { Footer } from "./Components/Footer/Footer";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Signin from "./Components/Signin/Signin";
import Bag from "./Pages/Bag/Bag";
import Checkout from "./Components/Checkout/Checkout";

function App() {
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

  return (
    <div onLoad={checkUserAuthentication}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="shoes/:shoesID" element={<ShoesID />} />

        <Route element={<ProtectedRoute authenticated={IsAuthenticated} />}>
          <Route path="cart" element={<Bag />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="signin" element={<Signin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
