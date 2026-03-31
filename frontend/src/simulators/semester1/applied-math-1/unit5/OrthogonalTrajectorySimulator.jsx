const OrthogonalTrajectorySimulator = () => {
  return (
    <div>
      <h3>🌀 Orthogonal Trajectories</h3>

      <div className="formula-box">
        Family: y² = 2ax
      </div>

      <div className="result-box">
        Differentiate → 2y dy/dx = 2a <br />
        Replace dy/dx by -1/p <br />
        Solve new DE <br />
        Trajectories intersect at 90°
      </div>
    </div>
  );
};

export default OrthogonalTrajectorySimulator;
