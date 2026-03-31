import React, { useState } from "react";
import "./CFundamentals.css";

import ProgramExecutionSimulator from "./ProgramExecutionSimulator";
import FirstCProgramSimulator from "./FirstCProgramSimulator";
import IOSimulator from "./IOSimulator";
import DataTypesSimulator from "./DataTypesSimulator";
import VariablesKeywordsSimulator from "./VariablesKeywordsSimulator";
import OperatorsSimulator from "./OperatorsSimulator";

const CFundamentalsSimulator = () => {
  const [active, setActive] = useState("execution");

  return (
    <div className="c-unit2-container">
      <h1>💻 Computer Programming</h1>
      <h2>Unit 2: C Fundamentals</h2>

      <div className="c-tabs">
        <button onClick={() => setActive("execution")}>Execution</button>
        <button onClick={() => setActive("first")}>First Program</button>
        <button onClick={() => setActive("io")}>Input / Output</button>
        <button onClick={() => setActive("datatypes")}>Data Types</button>
        <button onClick={() => setActive("variables")}>Variables</button>
        <button onClick={() => setActive("operators")}>Operators</button>
      </div>

      <div className="c-content">
        {active === "execution" && <ProgramExecutionSimulator />}
        {active === "first" && <FirstCProgramSimulator />}
        {active === "io" && <IOSimulator />}
        {active === "datatypes" && <DataTypesSimulator />}
        {active === "variables" && <VariablesKeywordsSimulator />}
        {active === "operators" && <OperatorsSimulator />}
      </div>
    </div>
  );
};

export default CFundamentalsSimulator;
