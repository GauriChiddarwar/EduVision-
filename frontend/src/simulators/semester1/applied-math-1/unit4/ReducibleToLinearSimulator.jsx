const ReducibleToLinearSimulator = () => {
  return (
    <div>
      <h3>🔁 Reducible to Linear DE</h3>

      <p><b>Example:</b></p>
      <div className="formula-box">
        dy/dx + y/x = x²y²
      </div>

      <div className="result-box">
        Divide by y² → convert to linear form <br />
        Substitute z = 1/y <br />
        Equation becomes linear in z <br />
        ✅ Solved using substitution
      </div>
    </div>
  );
};

export default ReducibleToLinearSimulator;
