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
import StringJS from "@pages/javascript/String.jsx";
import ArrayJS from "@pages/javascript/Array.jsx";
import OperatorsJS from "@pages/javascript/Operators.jsx";
import LogicOperatorsJS from "@pages/javascript/LogicOperators.jsx";
import MathPreUni from "@pages/math/pre_uni/MathPreUni.jsx";
import Aritmetica from "@pages/math/pre_uni/Aritmetica.jsx";
import Algebra from "@pages/math/pre_uni/Algebra.jsx";
import Geometria from "@pages/math/pre_uni/Geometria.jsx";
import Trigonometria from "@pages/math/pre_uni/Trigonometria.jsx";
import GeometriaAnalitica from "@pages/math/pre_uni/GeometriaAnalitica.jsx";
import AlgebraIntermedia from "@pages/math/pre_uni/AlgebraIntermedia.jsx";
import NumerosComplejos from "@pages/math/pre_uni/NumerosComplejos.jsx";
import LogaritmosExponentes from "@pages/math/pre_uni/LogaritmosExponentes.jsx";
import IntroduccionCalculo from "@pages/math/pre_uni/IntroduccionCalculo.jsx";
import Estadistica from "@pages/math/pre_uni/Estadistica.jsx";
import MatematicasDiscretas from "@pages/math/pre_uni/MatematicasDiscretas.jsx";
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
          <Route path="javascript/operadores_logicos" element={<LogicOperatorsJS />} />
          <Route path="javascript/cadenas_de_texto" element={<StringJS />} />
          <Route path="javascript/arreglos" element={<ArrayJS />} />
          <Route path="fundamentos" element={<Fundaments />} />
          <Route path="fundamentos/tipos_datos" element={<DataTypes />} />
          <Route path="fundamentos/estructura_datos" element={<DataEstructure />} />
          <Route path="math/pre_uni" element={<MathPreUni />} />
          <Route path="math/pre_uni/aritmetica" element={<Aritmetica />} />
          <Route path="math/pre_uni/algebra" element={<Algebra />} />
          <Route path="math/pre_uni/geometria" element={<Geometria />} />
          <Route path="math/pre_uni/trigonometria" element={<Trigonometria />} />
          <Route path="math/pre_uni/geometria_analitica" element={<GeometriaAnalitica />} />
          <Route path="math/pre_uni/algebra_intermedia" element={<AlgebraIntermedia />} />
          <Route path="math/pre_uni/numeros_complejos" element={<NumerosComplejos />} />
          <Route path="math/pre_uni/logaritmos_exponentes" element={<LogaritmosExponentes />} />
          <Route path="math/pre_uni/introduccion_calculo" element={<IntroduccionCalculo />} />
          <Route path="math/pre_uni/estadistica" element={<Estadistica />} />
          <Route path="math/pre_uni/matematicas_discretas" element={<MatematicasDiscretas />} />
          <Route path="node" element={<Node />} />
          <Route path="node/comandos" element={<NodeComands />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
