import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Compras from "./Compras";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/compras" element={<Compras />} />
      </Routes>
    </Router>
  );
};

export default App;
