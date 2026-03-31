import React, { useState } from "react";
import "./Unit1ComputerProgramming.css";

import CharacteristicsSimulator from "./CharacteristicsSimulator";
import ComputerOrganizationSimulator from "./ComputerOrganizationSimulator";
import IPOSimulator from "./IPOSimulator";
import MemoryTypesSimulator from "./MemoryTypesSimulator";
import CIntroductionSimulator from "./CIntroductionSimulator";
import CStructureSimulator from "./CStructureSimulator";

const Unit1ComputerProgrammingSimulator = () => {
  const [active, setActive] = useState("characteristics");

  return (
    <div className="cp-unit1-container">
      <h1>💻 Computer Programming</h1>
      <h2>Unit 1: Introduction</h2>

      <div className="cp-tabs">
        <button onClick={() => setActive("characteristics")}>Characteristics</button>
        <button onClick={() => setActive("organization")}>Organization</button>
        <button onClick={() => setActive("ipo")}>IPO Cycle</button>
        <button onClick={() => setActive("memory")}>Memory</button>
        <button onClick={() => setActive("cintro")}>C Language</button>
        <button onClick={() => setActive("cstructure")}>C Structure</button>
      </div>

      <div className="cp-content">
        {active === "characteristics" && <CharacteristicsSimulator />}
        {active === "organization" && <ComputerOrganizationSimulator />}
        {active === "ipo" && <IPOSimulator />}
        {active === "memory" && <MemoryTypesSimulator />}
        {active === "cintro" && <CIntroductionSimulator />}
        {active === "cstructure" && <CStructureSimulator />}
      </div>
    </div>
  );
};

export default Unit1ComputerProgrammingSimulator;
