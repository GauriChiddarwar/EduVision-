const RatioTestSimulator = () => {
  return (
    <div>
      <h3>📈 Ratio Test</h3>

      <div className="formula-box">
        L = lim (a<sub>n+1</sub> / a<sub>n</sub>)
      </div>

      <div className="result-box">
        ✔ L &lt; 1 → Convergent <br />
        ❌ L &gt; 1 → Divergent <br />
        ⚠️ L = 1 → Inconclusive
      </div>

      <p className="example">
        Example: ∑ n!/2ⁿ → L = 1/2 → <b>Convergent</b>
      </p>
    </div>
  );
};

export default RatioTestSimulator;
