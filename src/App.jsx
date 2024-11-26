import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "@pages/home/Home.jsx";
import Fundaments from "@pages/fundaments/Fundaments.jsx";
import DataTypes from "@pages/fundaments/DataTypes.jsx";
import SQL from "@pages/sql/SQL.jsx";
import DefinitionSQL from "@pages/sql/Definition.jsx";
import PHP from "@pages/php/PHP.jsx";
import Variable from "@pages/php/Variable.jsx";
import Javascript from "@pages/javascript/Javascript.jsx";
import VariableJS from "@pages/javascript/Variable.jsx";
//import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sql" element={<SQL />} />
          <Route path="sql/definiciones" element={<DefinitionSQL />} />
          <Route path="php" element={<PHP />} />
          <Route path="php/variable" element={<Variable />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="javascript/variable" element={<VariableJS />} />
          <Route path="fundamentos" element={<Fundaments />} />
          <Route path="fundamentos/tipos_datos" element={<DataTypes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
