import React from "react";
import { Routes, Route } from "react-router-dom";
import Tempo from "./componentes/tempo";


function App(){

  return(<>
  
  <Routes>
    <Route
    path="/"
    element={<Tempo/>}
    />

  </Routes>
  
  </>);
}
export default App