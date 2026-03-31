const ComparisonTestSimulator = () => {
  return (
    <div>
      <h3>📊 Comparison Test</h3>

      <div className="formula-box">
        Compare a<sub>n</sub> with b<sub>n</sub>
      </div>

      <div className="result-box">
        If 0 ≤ a<sub>n</sub> ≤ b<sub>n</sub> <br />
        ✔ b<sub>n</sub> converges → a<sub>n</sub> converges <br />
        ❌ a<sub>n</sub> diverges → b<sub>n</sub> diverges
      </div>

      <p className="example">
        Example: ∑ 1/(n²+1) ≤ ∑ 1/n² → <b>Convergent</b>
      </p>
    </div>
  );
};

export default ComparisonTestSimulator;
