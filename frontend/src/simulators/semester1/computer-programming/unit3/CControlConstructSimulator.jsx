import React, { useState } from "react";
import "./CControlConstruct.css";

import DecisionMakingSimulator from "./DecisionMakingSimulator";
import LoopingSimulator from "./LoopingSimulator";
import JumpStatementsSimulator from "./JumpStatementsSimulator";
import BasicProgramsSimulator from "./BasicProgramsSimulator";

const CControlConstructSimulator = () => {
  const [active, setActive] = useState("decision");

  return (
    <div className="cc-container">
      <h1>💻 Computer Programming</h1>
      <h2>Unit 3: C Control Constructs</h2>

      <div className="cc-tabs">
        <button onClick={() => setActive("decision")}>Decision Making</button>
        <button onClick={() => setActive("looping")}>Looping</button>
        <button onClick={() => setActive("jump")}>Jump Statements</button>
        <button onClick={() => setActive("programs")}>Basic Programs</button>
      </div>

      <div className="cc-content">
        {active === "decision" && <DecisionMakingSimulator />}
        {active === "looping" && <LoopingSimulator />}
        {active === "jump" && <JumpStatementsSimulator />}
        {active === "programs" && <BasicProgramsSimulator />}
      </div>
    </div>
  );
};

export default CControlConstructSimulator;
