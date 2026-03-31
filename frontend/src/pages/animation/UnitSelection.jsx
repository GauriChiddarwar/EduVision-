import { useParams, useNavigate } from "react-router-dom";
import "../../styles/animation/UnitSelection.css";

const unitData = {
  /* ===================== SEMESTER 1 ===================== */
  1: {
    "Applied Mathematics - I": [
      "Unit I: Differential Calculus – I",
      "Unit II: Differential Calculus – II",
      "Unit III: Differential Calculus – III",
      "Unit IV: Ordinary Differential Equations (First Order & First Degree)",
      "Unit V: Differential Equations (First Order & Higher Degree)",
      "Unit VI: Infinite Series"
    ],
    "Engineering Physics": [
      "Unit I: Electron Ballistics",
      "Unit II: Crystallography",
      "Unit III: Interference and Diffraction of Light",
      "Unit IV: Laser Physics",
      "Unit V: Fibre Optics",
      "Unit VI: Fluid Dynamics"
    ],
    "Computer Programming": [
      "Unit I: Introduction",
      "Unit II: C Fundamentals",
      "Unit III: C Control Construct",
      "Unit IV: Array and Strings",
      "Unit V: Functions",
      "Unit VI: Pointers"
    ],
    "Engineering Mechanics (ESC)": [
      "Unit I: Basics of Engineering Drawing and Projection",
      "Unit II: Projection of Plane",
      "Unit III: Projection of Solids",
      "Unit IV: Orthographic Projection",
      "Unit V: Isometric Views and Projection",
      "Unit VI: Fundamentals of CAD Software"
    ]
  },

  /* ===================== SEMESTER 2 ===================== */
  2: {
    "Applied Mathematics - II": [
      "Unit I: Matrices",
      "Unit II: Fourier Series",
      "Unit III: Complex Numbers",
      "Unit IV: Integral Calculus – I",
      "Unit V: Integral Calculus – II",
      "Unit VI: Integral Calculus – III"
    ],
    "Engineering Chemistry": [
      "Unit I: Engineering Materials and Their Properties",
      "Unit II: Cement Engineering",
      "Unit III: Water Characteristics and Their Effects on Boiler",
      "Unit IV: Fuel and Lubricant",
      "Unit V: Energy Sources and Storage Devices",
      "Unit VI: Corrosion and Its Control"
    ],
    "Basic Electrical Engineering": [
      "Unit I: Fundamentals of Electrical Engineering",
      "Unit II: DC Circuit Analysis",
      "Unit III: Magnetic Circuits & Electromagnetic Induction",
      "Unit IV: A.C. Fundamentals",
      "Unit V: Polyphase Circuits",
      "Unit VI: Single Phase Transformer & Electrical Safety"
    ],
    "Engineering Graphics": [
      "Unit I: Engineering Drawing Basics",
      "Unit II: Conic Sections",
      "Unit III: Projections of Points and Lines",
      "Unit IV: Projections of Planes",
      "Unit V: Projections of Solids",
      "Unit VI: Development of Surfaces"
    ]
  },

  /* ===================== SEMESTER 3 ===================== */
  3: {
    "Discrete Mathematics": [
      "Unit 1: Logic & Proofs",
      "Unit 2: Sets & Relations",
      "Unit 3: Algebraic Structures",
      "Unit 4: Boolean Algebra",
      "Unit 5: Trees",
      "Unit 6: Graphs"
    ],
    "Object Oriented Programming": [
      "Unit 1: Introduction to OOP",
      "Unit 2: Introduction to Java",
      "Unit 3: Classes and Objects",
      "Unit 4: Inheritance",
      "Unit 5: Interfaces, Packages, Exceptions",
      "Unit 6: I/O and GUI (AWT & Swing)"
    ],
    "Data Structures": [
      "Unit 1: Introduction to Data Structures",
      "Unit 2: Array and Record Structure",
      "Unit 3: Linked Lists",
      "Unit 4: Stack and Queue",
      "Unit 5: Trees",
      "Unit 6: Graphs and Sorting Algorithms"
    ],
    "Analog & Digital Electronics": [
      "Unit 1: PN Junction Diode & BJT",
      "Unit 2: Field Effect Transistors",
      "Unit 3: Optoelectronic Devices",
      "Unit 4: Number System",
      "Unit 5: Minimization Techniques",
      "Unit 6: Combinational Circuits"
    ],
    "Environmental Studies": [
      "Unit 1: Multidisciplinary Nature of EVS",
      "Unit 2: Renewable & Non-Renewable Resources",
      "Unit 3: Ecosystems",
      "Unit 4: Environmental Pollution",
      "Unit 5: Current Environmental Issues in India",
      "Unit 6: Human Population and Environment"
    ]
  },

  /* ===================== SEMESTER 4 ===================== */
  4: {
    "Artificial Intelligence": [
      "Unit I: Introduction to AI",
      "Unit II: Problem Solving Through AI",
      "Unit III: Uninformed Search",
      "Unit IV: Informed Search",
      "Unit V: Adversarial Search & Games",
      "Unit VI: Knowledge Representation"
    ],
    "Data Communication & Networking": [
      "Unit I: Introduction",
      "Unit II: Encoding, Modulation & Transmission Media",
      "Unit III: Multiplexing & Error Control",
      "Unit IV: Data Link Control",
      "Unit V: LAN & Switching",
      "Unit VI: TCP/IP Protocol Suite"
    ],
    "Operating System": [
      "Unit I: OS Introduction",
      "Unit II: Process Scheduling",
      "Unit III: Process Synchronization",
      "Unit IV: Memory Management",
      "Unit V: File System",
      "Unit VI: Storage Management"
    ],
    "Theory of Computation": [
      "Unit I: Finite State Machines",
      "Unit II: Regular Expressions",
      "Unit III: Regular Languages",
      "Unit IV: Context Free Grammar",
      "Unit V: Pushdown Automata",
      "Unit VI: Turing Machines"
    ]
  },

  /* ===================== SEMESTER 5 ===================== */
  5: {
    "Database Management Systems": [
      "Unit I: Introduction to DBMS",
      "Unit II: Relational Algebra & SQL",
      "Unit III: Database Design",
      "Unit IV: Query Processing",
      "Unit V: Transaction Management",
      "Unit VI: Concurrency Control"
    ],
    "Compiler Design": [
      "Unit I: Introduction to Compiler",
      "Unit II: Syntax Analysis",
      "Unit III: Bottom-Up Parsing",
      "Unit IV: Syntax Directed Translation",
      "Unit V: Intermediate Code Generation",
      "Unit VI: Code Generation"
    ],
    "Computer Architecture & Organization": [
      "Unit I: Computer Structure",
      "Unit II: Memory Locations",
      "Unit III: Memory Unit",
      "Unit IV: Processing Unit",
      "Unit V: I/O Organization",
      "Unit VI: Arithmetic Unit"
    ]
  },

  /* ===================== SEMESTER 6 ===================== */
  6: {
    "Design & Analysis of Algorithms": [
      "Unit I: Iterative Algorithm Design",
      "Unit II: Divide and Conquer",
      "Unit III: Greedy Method",
      "Unit IV: Dynamic Programming",
      "Unit V: Backtracking",
      "Unit VI: Algorithm Efficiency"
    ],
    "Software Engineering": [
      "Unit I: Software Process Models",
      "Unit II: Project Management",
      "Unit III: Scheduling & Quality",
      "Unit IV: Requirement Engineering",
      "Unit V: Software Architecture",
      "Unit VI: Software Testing"
    ]
  },

  /* ===================== SEMESTER 7 ===================== */
  7: {
    "Computer Graphics": [
      "Unit I: Introduction to Graphics",
      "Unit II: Output Primitives",
      "Unit III: 2D Transformations",
      "Unit IV: Viewing & Clipping",
      "Unit V: 3D Transformations",
      "Unit VI: Animation"
    ],
    "Cloud Computing": [
      "Unit I: Cloud Fundamentals",
      "Unit II: Deployment Models",
      "Unit III: Virtualization",
      "Unit IV: Cloud Development",
      "Unit V: Cloud Providers",
      "Unit VI: Cloud Security"
    ]
  },

  /* ===================== SEMESTER 8 ===================== */
  8: {
    "Object Oriented Analysis & Design": [
      "Unit I: OOAD Introduction",
      "Unit II: Use Case Modeling",
      "Unit III: Domain Models",
      "Unit IV: UML Diagrams",
      "Unit V: GRASP",
      "Unit VI: Design Patterns"
    ],
    "Professional Ethics & Management": [
      "Unit I: Ethics Introduction",
      "Unit II: Professional Practices",
      "Unit III: Engineer Responsibilities",
      "Unit IV: IPR & Ethics",
      "Unit V: Digital Information Ethics",
      "Unit VI: Management"
    ]
  }
};

const UnitSelection = () => {
  const { sem, subject } = useParams();
  const navigate = useNavigate();

  const semesterUnits = unitData[sem]?.[decodeURIComponent(subject)];

  return (
    <div className="selection-page">
      <h2>{decodeURIComponent(subject)} – Units</h2>

      <div className="card-grid">
        {semesterUnits?.map((unit, i) => (
          <div
            key={i}
            className="select-card"
            onClick={() =>
              navigate(
                `/animation/semester/${sem}/subject/${subject}/unit/${i + 1}`
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
