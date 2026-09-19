import React from "react";
import { Routes, Route } from "react-router-dom";
import Tempo from "./componentes/tempo";
import Conteudo from "./componentes/Conteudo";
import Home from "./componentes/Home";
import Acceuil from "./componentes/Acceuil";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/Tempo" element={<Tempo />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Conteudo" element={<Conteudo />} />
    </Routes>
  );
}

export default App;