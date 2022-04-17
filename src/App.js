import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ShoesID from "./Components/ShoesID/[ShoesID]";
import Shoes from "./Pages/Shoes";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="shoes/:shoesID" element={<ShoesID />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
