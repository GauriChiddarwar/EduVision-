import { useParams, useNavigate } from "react-router-dom";
import "../../styles/animation/SubjectSelection.css";

// Semester-wise subjects (import or define here)
const semesterSubjects = {
  1: ["Applied Mathematics - I", "Engineering Physics", "Computer Programming", "Engineering Mechanics (ESC)"],
  2: ["Applied Mathematics - II", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Graphics"],
  3: [ "Discrete Mathematics", "Object Oriented Programming", "Data Structures", "Analog & Digital Electronics", "Environmental Studies"],
  4: ["Artificial Intelligence", "Data Communication & Networking", "Operating System",  "Theory of Computation"],
  5: ["Database Management Systems", "Compiler Design", "Computer Architecture & Organization"],
  6: ["Security Policy & Governance", "Design & Analysis of Algorithms", "Software Engineering"],
  7: ["Social Science & Engineering Economics", "Computer Graphics", "Cloud Computing", "Professional Elective - III (Robotics/Data Warehousing/Embedded/Digital Forensic)"],
  8: ["Object Oriented Analysis & Design", "Professional Ethics & Management", "Professional Elective - V (VR/ML & AI/Wireless Sensor Networks/System & Software Security)"]
};

const SubjectSelection = () => {
  const { sem } = useParams(); // semester from URL
  const navigate = useNavigate();

  // Convert sem to number for object key
  const semesterNumber = parseInt(sem);

  // Subjects of the selected semester
  const subjects = semesterSubjects[semesterNumber] || [];

  if (subjects.length === 0) {
    return (
      <div className="selection-page">
        <h2>No subjects found for Semester {semesterNumber}</h2>
      </div>
    );
  }

  return (
    <div className="selection-page">
      <h2>Semester {semesterNumber} Subjects</h2>
      <div className="card-grid">
        {subjects.map((sub, i) => (
          <div
            key={i}
            className="select-card"
            onClick={() =>
              navigate(`/animation/semester/${semesterNumber}/subject/${encodeURIComponent(sub)}`)
            }
          >
            {sub}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection;
