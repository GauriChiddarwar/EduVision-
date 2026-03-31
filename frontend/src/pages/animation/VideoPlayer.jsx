import { useParams } from "react-router-dom";
import "../../styles/animation/VideoPlayer.css";

const VideoPlayer = () => {
  const { sem, subject, unit } = useParams();

  // normalize subject for folder name
  const subjectKey = decodeURIComponent(subject)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/–/g, "-");

  const videoPath = `/animation/semester${sem}/${subjectKey}/unit${unit}.mp4`;

  return (
    <div className="video-page">
      <h2>
        {decodeURIComponent(subject)} – Unit {unit}
      </h2>

      <div className="video-container">
        <video controls width="100%">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-info">
        <h3>What you will learn</h3>
        <ul>
          <li>Concept explanation with animation</li>
          <li>Visual understanding</li>
          <li>Important exam points</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;
