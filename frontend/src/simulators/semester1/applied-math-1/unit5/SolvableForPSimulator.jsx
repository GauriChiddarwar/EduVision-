const SolvableForPSimulator = () => {
  return (
    <div>
      <h3>📐 Differential Equation Solvable for p</h3>

      <div className="formula-box">
        p² + 2yp + y² = 0
      </div>

      <div className="result-box">
        Solve quadratic in p <br />
        p = -y <br />
        dy/dx = -y <br />
        Solution: y = Ce<sup>-x</sup>
      </div>
    </div>
  );
};

export default SolvableForPSimulator;
