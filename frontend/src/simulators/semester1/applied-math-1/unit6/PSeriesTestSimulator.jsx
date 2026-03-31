const PSeriesTestSimulator = () => {
  return (
    <div>
      <h3>📐 p-Series Test</h3>

      <div className="formula-box">
        ∑ 1 / n<sup>p</sup>
      </div>

      <div className="result-box">
        ✔ If p &gt; 1 → Series Converges <br />
        ❌ If p ≤ 1 → Series Diverges
      </div>

      <p className="example">
        Example: ∑ 1/n² → p = 2 → <b>Convergent</b>
      </p>
    </div>
  );
};

export default PSeriesTestSimulator;
