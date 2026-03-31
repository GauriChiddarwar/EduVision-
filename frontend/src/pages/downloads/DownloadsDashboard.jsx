import { useNavigate } from "react-router-dom";
import "./Downloads.css";

const DownloadsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="downloads-page">
      <h1>📥 Study Materials</h1>
      <p>Download notes, PDFs & question banks</p>

      <div className="card-grid">
        <div
          className="select-card"
          onClick={() => navigate("/downloads/semester")}
        >
          📚 Browse Downloads
        </div>
      </div>
    </div>
  );
};

export default DownloadsDashboard;
