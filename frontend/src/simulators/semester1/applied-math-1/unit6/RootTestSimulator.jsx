import React from "react";

const RootTestSimulator = () => {
  return (
    <div className="test-simulator">
      <h3>🌱 Root Test</h3>

      <div className="formula-box">
        L = lim √[n](a<sub>n</sub>)
      </div>

      <div className="result-box">
        ✔ L &lt; 1 → Convergent <br />
        ❌ L &gt; 1 → Divergent <br />
        ⚠️ L = 1 → Inconclusive
      </div>

      <p className="example">
        Example: ∑ (3/4)<sup>n</sup> → <b>Convergent</b>
      </p>
    </div>
  );
};

export default RootTestSimulator;
