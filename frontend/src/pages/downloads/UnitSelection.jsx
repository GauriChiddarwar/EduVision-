import { useParams, useNavigate } from "react-router-dom";
import "./Downloads.css";

const unitData = {
  "applied-mathematics-i": 6,
  "computer-programming": 6,
};

const UnitSelection = () => {
  const { sem, subject } = useParams();
  const navigate = useNavigate();

  const totalUnits = unitData[subject] || 0;

  return (
    <div className="selection-page">
      <h2>{subject.replace(/-/g, " ").toUpperCase()}</h2>

      <div className="card-grid">
        {Array.from({ length: totalUnits }).map((_, i) => (
          <div
            key={i}
            className="select-card"
            onClick={() =>
              navigate(
                `/downloads/semester/${sem}/subject/${subject}/unit/${i + 1}`
              )
            }
          >
            Unit {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitSelection;
