import { useNavigate } from "react-router-dom";
import "./Downloads.css";

const semesters = [1, 2, 3, 4, 5, 6];

const SemesterSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="selection-page">
      <h2>Select Semester</h2>

      <div className="card-grid">
        {semesters.map((sem) => (
          <div
            key={sem}
            className="select-card"
            onClick={() => navigate(`/downloads/semester/${sem}`)}
          >
            Semester {sem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterSelection;
