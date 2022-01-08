import "./App.css";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/apods/:date" element={<Home />} />
        <Route path="*" element={<Navigate to="/apods/:date" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
