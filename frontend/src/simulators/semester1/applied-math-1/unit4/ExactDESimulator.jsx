const ExactDESimulator = () => {
  return (
    <div>
      <h3>🧮 Exact Differential Equation</h3>

      <p>Condition for Exactness:</p>
      <div className="formula-box">
        ∂M/∂y = ∂N/∂x
      </div>

      <p><b>Example:</b></p>
      <div className="formula-box">
        (2xy + y²)dx + (x² + 2xy)dy = 0
      </div>

      <div className="result-box">
        ∂M/∂y = 2x + 2y <br />
        ∂N/∂x = 2x + 2y <br />
        ✅ Exact Differential Equation
      </div>
    </div>
  );
};

export default ExactDESimulator;
