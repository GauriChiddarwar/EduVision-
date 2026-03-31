import { useParams, useNavigate } from "react-router-dom";
import "./UnitSelection.css";

const unitData = {
  1: {
    "Applied Mathematics – I": [
      "Unit 1: Differential Calculus – I",
      "Unit 2: Differential Calculus – II",
      "Unit 3: Differential Calculus – III",
      "Unit 4: Ordinary Differential Equations",
      "Unit 5: Higher Order Differential Equations",
      "Unit 6: Infinite Series",
    ],
    "Computer Programming": [
      "Unit 1: Introduction to Programming",
      "Unit 2: C Fundamentals",
      "Unit 3: Control Structures",
      "Unit 4: Arrays and Strings",
      "Unit 5: Functions",
      "Unit 6: Pointers",
    ],
  },


  2: {
    "Applied Mathematics – II": [
      "Unit 1: Matrices",
      "Unit 2: Fourier Series",
      "Unit 3: Complex Numbers",
      "Unit 4: Integral Calculus – I",
      "Unit 5: Integral Calculus – II",
      "Unit 6: Integral Calculus – III"
    ],
    "Basic Electrical Engineering": [
      "Unit 1: Electrical Fundamentals",
      "Unit 2: DC Circuits",
      "Unit 3: AC Circuits",
      "Unit 4: Transformers",
      "Unit 5: Machines",
      "Unit 6: Electrical Safety"
    ]
  },
  3: {
    "Discrete Mathematics": [
      "Unit 1: Logic & Proofs",
      "Unit 2: Sets & Relations",
      "Unit 3: Algebraic Structures",
      "Unit 4: Boolean Algebra",
      "Unit 5: Trees",
      "Unit 6: Graphs"
    ],
    "Data Structures": [
      "Unit 1: Introduction",
      "Unit 2: Arrays",
      "Unit 3: Linked Lists",
      "Unit 4: Stack & Queue",
      "Unit 5: Trees",
      "Unit 6: Graphs"
    ],
    "Object Oriented Programming": [
      "Unit 1: OOP Concepts",
      "Unit 2: Java Basics",
      "Unit 3: Classes & Objects",
      "Unit 4: Inheritance",
      "Unit 5: Interfaces",
      "Unit 6: I/O & GUI"
    ]
  },

  /* ===== SEMESTER 4 ===== */
  4: {
    "Operating System": [
      "Unit 1: OS Introduction",
      "Unit 2: Process Scheduling",
      "Unit 3: Synchronization",
      "Unit 4: Memory Management",
      "Unit 5: File System",
      "Unit 6: Storage Management"
    ],
    "Theory of Computation": [
      "Unit 1: Finite Automata",
      "Unit 2: Regular Expressions",
      "Unit 3: Regular Languages",
      "Unit 4: Context Free Grammar",
      "Unit 5: PDA",
      "Unit 6: Turing Machine"
    ]
  },

  /* ===== SEMESTER 5 ===== */
  5: {
    "Database Management Systems": [
      "Unit 1: DBMS Introduction",
      "Unit 2: Relational Model",
      "Unit 3: SQL",
      "Unit 4: Query Processing",
      "Unit 5: Transactions",
      "Unit 6: Concurrency Control"
    ],
    "Compiler Design": [
      "Unit 1: Compiler Overview",
      "Unit 2: Lexical Analysis",
      "Unit 3: Syntax Analysis",
      "Unit 4: Semantic Analysis",
      "Unit 5: Code Generation",
      "Unit 6: Optimization"
    ]
  },

  /* ===== SEMESTER 6 ===== */
  6: {
    "Design & Analysis of Algorithms": [
      "Unit 1: Algorithm Basics",
      "Unit 2: Divide and Conquer",
      "Unit 3: Greedy Algorithms",
      "Unit 4: Dynamic Programming",
      "Unit 5: Backtracking",
      "Unit 6: Complexity Analysis"
    ]
  }
};
const UnitSelection = () => {
  const { sem, subject } = useParams();
  const navigate = useNavigate();

  const decodedSubject = decodeURIComponent(subject);
  const units = unitData[sem]?.[decodedSubject] || [];

  return (
    <div className="selection-page">
      <h2>{decodedSubject} – Units</h2>

      <div className="card-grid">
        {units.map((unit, index) => (
          <div
            key={index}
            className="select-card"
            onClick={() =>
              navigate(
                `/simulator/semester/${sem}/subject/${subject}/unit/${index + 1}`
              )
            }
          >
            {unit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitSelection;