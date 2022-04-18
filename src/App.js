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
import Cart from "./Pages/Cart/Cart";

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

        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
