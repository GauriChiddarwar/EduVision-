import { useParams, useNavigate } from "react-router-dom";
import "./Downloads.css";

const subjectData = {
  1: [
    { name: "Applied Mathematics – I", key: "applied-mathematics-i" },
    { name: "Computer Programming", key: "computer-programming" },
  ],
};

const SubjectSelection = () => {
  const { sem } = useParams();
  const navigate = useNavigate();

  return (
    <div className="selection-page">
      <h2>Semester {sem} – Subjects</h2>

      <div className="card-grid">
        {subjectData[sem]?.map((sub) => (
          <div
            key={sub.key}
            className="select-card"
            onClick={() =>
              navigate(`/downloads/semester/${sem}/subject/${sub.key}`)
            }
          >
            {sub.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection;
