import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "@pages/home/Home.jsx";
import Fundaments from "@pages/fundaments/Fundaments.jsx";
import DataTypes from "@pages/fundaments/DataTypes.jsx";
import DataEstructure from "@pages/fundaments/DataEstructure.jsx";
import SQL from "@pages/sql/SQL.jsx";
import DefinitionSQL from "@pages/sql/Definition.jsx";
import PHP from "@pages/php/PHP.jsx";
import Comands from "@pages/php/Comands.jsx";
import Structure from "@pages/php/Structure.jsx";
import Variable from "@pages/php/Variable.jsx";
import Javascript from "@pages/javascript/Javascript.jsx";
import VariableJS from "@pages/javascript/Variable.jsx";
import DataJS from "@pages/javascript/Data.jsx";
import OperatorsJS from "@pages/javascript/Operators.jsx";
import Node from "@pages/node/Node.jsx";
import NodeComands from "@pages/node/Comands.jsx";
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
          <Route path="php/comandos" element={<Comands />} />
          <Route path="php/estructura" element={<Structure />} />
          <Route path="php/variable" element={<Variable />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="javascript/variable" element={<VariableJS />} />
          <Route path="javascript/tipos_datos" element={<DataJS />} />
          <Route path="javascript/operadores" element={<OperatorsJS />} />
          <Route path="fundamentos" element={<Fundaments />} />
          <Route path="fundamentos/tipos_datos" element={<DataTypes />} />
          <Route path="fundamentos/estructura_datos" element={<DataEstructure />} />
          <Route path="node" element={<Node />} />
          <Route path="node/comandos" element={<NodeComands />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
