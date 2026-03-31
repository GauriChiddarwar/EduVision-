import React, { useState } from "react";

const HomogeneousFunctionSimulator = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>📐 Homogeneous Function Checker</h3>

      <p><b>Function:</b> f(x, y) = x² + y²</p>

      <button onClick={() => setShow(true)}>
        Check Homogeneity
      </button>

      {show && (
        <div className="result-box">
          Degree of each term = 2 <br />
          ✅ Function is homogeneous of degree 2
        </div>
      )}
    </div>
  );
};

export default HomogeneousFunctionSimulator;
