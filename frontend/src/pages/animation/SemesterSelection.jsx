import { useNavigate } from "react-router-dom";
import "../../styles/animation/SemesterSelection.css";

const SemesterSelection = () => {
  const navigate = useNavigate();
  const semesters = [1,2,3,4,5,6,7,8];

  return (
    <div className="selection-page">
      <h2>Select Semester</h2>
      <div className="card-grid">
        {semesters.map((sem) => (
          <div
            key={sem}
            className="select-card"
            onClick={() => navigate(`/animation/semester/${sem}`)}
          >
            Semester {sem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterSelection;
