import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="*"
          // element={<PageNotFound />}
        />
        <Route path="" element={<App />} />
      </Routes>
    </>
  );
}

export default App;
