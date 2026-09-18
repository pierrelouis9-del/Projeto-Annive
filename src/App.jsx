import React from "react";
import { Routes, Route } from "react-router-dom";
import Tempo from "./componentes/tempo";
import Conteudo from "./componentes/Conteudo";
import Home from "./componentes/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Tempo />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Conteudo" element={<Conteudo />} />
    </Routes>
  );
}

export default App;