import { useParams, useNavigate } from "react-router-dom";
import "./SubjectSelection.css";

const semesterSubjects = {
  1: ["Applied Mathematics – I", "Computer Programming"],
  2: ["Applied Mathematics – II", "Basic Electrical Engineering"],
  3: ["Discrete Mathematics", "Data Structures", "Object Oriented Programming"],
  4: ["Operating System", "Theory of Computation"],
  5: ["Database Management Systems", "Compiler Design"],
  6: ["Design & Analysis of Algorithms"]
};

const SubjectSelection = () => {
  const { sem } = useParams();
  const navigate = useNavigate();

  const subjects = semesterSubjects[sem] || [];

  return (
    <div className="selection-page">
      <h2>Semester {sem} – Subjects</h2>

      <div className="card-grid">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="select-card"
            onClick={() =>
              navigate(
                `/simulator/semester/${sem}/subject/${encodeURIComponent(
                  subject
                )}`
              )
            }
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection;
