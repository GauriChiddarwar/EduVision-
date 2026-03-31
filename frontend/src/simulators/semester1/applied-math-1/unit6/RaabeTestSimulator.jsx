const RaabeTestSimulator = () => {
  return (
    <div>
      <h3>🧮 Raabe’s Test</h3>

      <div className="formula-box">
        R = lim n (a<sub>n</sub>/a<sub>n+1</sub> − 1)
      </div>

      <div className="result-box">
        ✔ R &gt; 1 → Convergent <br />
        ❌ R &lt; 1 → Divergent <br />
        ⚠️ R = 1 → Inconclusive
      </div>

      <p className="example">
        Useful when Ratio Test fails
      </p>
    </div>
  );
};

export default RaabeTestSimulator;
