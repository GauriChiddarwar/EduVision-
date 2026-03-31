import React, { useState } from "react";

const EulerTheoremSimulator = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>📐 Euler’s Theorem on Homogeneous Function</h3>

      <p>
        If <b>z</b> is a homogeneous function of degree <b>n</b>, then:
      </p>

      <div className="formula-box">
        x(∂z/∂x) + y(∂z/∂y) = nz
      </div>

      <p>
        Example:
        <br />
        <b>z = x² + y²</b> (degree n = 2)
      </p>

      <button onClick={() => setShow(true)}>Verify Euler’s Theorem</button>

      {show && (
        <div className="result-box">
          ∂z/∂x = 2x, ∂z/∂y = 2y
          <br />
          LHS = x(2x) + y(2y) = 2(x² + y²)
          <br />
          RHS = 2z
          <br />
          ✅ Verified
        </div>
      )}
    </div>
  );
};

export default EulerTheoremSimulator;
