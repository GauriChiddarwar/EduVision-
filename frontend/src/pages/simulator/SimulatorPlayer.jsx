import { useParams } from "react-router-dom";
import "./SimulatorPlayer.css";

/* ===================== SEMESTER 1 – APPLIED MATHEMATICS – I ===================== */
import Unit1Simulator from "../../simulators/semester1/applied-math-1/unit1/Unit1Simulator";
import Unit2Simulator from "../../simulators/semester1/applied-math-1/unit2/Unit2Simulator";
import Unit3Simulator from "../../simulators/semester1/applied-math-1/unit3/Unit3Simulator";
import Unit4ODESimulator from "../../simulators/semester1/applied-math-1/unit4/Unit4ODESimulator";
import Unit5DESimulator from "../../simulators/semester1/applied-math-1/unit5/Unit5DESimulator";
import Unit6InfiniteSeriesSimulator from "../../simulators/semester1/applied-math-1/unit6/Unit6InfiniteSeriesSimulator";

/* ===================== SEMESTER 1 – COMPUTER PROGRAMMING ===================== */
import Unit1ComputerProgrammingSimulator from
  "../../simulators/semester1/computer-programming/unit1/Unit1ComputerProgrammingSimulator";

import CFundamentalsSimulator from
  "../../simulators/semester1/computer-programming/unit2/CFundamentalsSimulator";

import CControlConstructSimulator from
  "../../simulators/semester1/computer-programming/unit3/CControlConstructSimulator";

/* ===================== SIMULATOR MAP ===================== */
const simulatorMap = {
  1: {
    "applied-mathematics-i": {
      1: Unit1Simulator,
      2: Unit2Simulator,
      3: Unit3Simulator,
      4: Unit4ODESimulator,
      5: Unit5DESimulator,
      6: Unit6InfiniteSeriesSimulator,
    },
    "computer-programming": {
      1: Unit1ComputerProgrammingSimulator,
      2: CFundamentalsSimulator,
      3: CControlConstructSimulator,
    },
  },

  // Future semesters (safe placeholders)
  3: {
    "discrete-mathematics": {},
  },
};

const SimulatorPlayer = () => {
  const { sem, subject, unit } = useParams();
  const unitNumber = Number(unit);

  /* normalize subject from URL */
  const keySubject = decodeURIComponent(subject)
    .toLowerCase()
    .replace(/–/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const SimulatorComponent =
    simulatorMap[Number(sem)]?.[keySubject]?.[unitNumber];

  return (
    <div className="simulator-player-page">
      <h2>
        {decodeURIComponent(subject)} – Unit {unitNumber}
      </h2>

      <div className="simulator-container">
        {SimulatorComponent ? (
          <SimulatorComponent />
        ) : (
          <div className="no-simulator">
            <p>🚧 Simulator not available yet.</p>
            <p>This unit will be added soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulatorPlayer;
