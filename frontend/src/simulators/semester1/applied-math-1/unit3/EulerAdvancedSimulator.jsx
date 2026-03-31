import React, { useState } from "react";

const EulerAdvancedSimulator = () => {
  const [verified, setVerified] = useState(false);

  return (
    <div>
      <h3>📘 Euler’s Theorem (Advanced)</h3>

      <p>
        If z = x² + y², verify:
        <br />
        x(∂z/∂x) + y(∂z/∂y) = nz
      </p>

      <button onClick={() => setVerified(true)}>
        Verify Euler’s Theorem
      </button>

      {verified && (
        <div className="result-box">
          ∂z/∂x = 2x, ∂z/∂y = 2y <br />
          LHS = 2(x² + y²) <br />
          RHS = 2z <br />
          ✅ Verified
        </div>
      )}
    </div>
  );
};

export default EulerAdvancedSimulator;
