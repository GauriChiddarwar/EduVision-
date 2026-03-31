const ReducibleToExactSimulator = () => {
  return (
    <div>
      <h3>🔄 Reducible to Exact DE</h3>

      <p><b>Example:</b></p>
      <div className="formula-box">
        (y + x)dx + x dy = 0
      </div>

      <div className="result-box">
        Equation is not exact initially <br />
        Multiply by Integrating Factor (IF = 1/x) <br />
        Becomes exact after IF <br />
        ✅ Solved
      </div>
    </div>
  );
};

export default ReducibleToExactSimulator;
