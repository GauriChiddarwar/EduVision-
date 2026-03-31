import React from "react";

const LeibnitzTheoremSimulator = () => {
  return (
    <div>
      <h3>📐 Leibnitz’s Theorem</h3>
      <p>
        If <b>y = u·v</b>, then
      </p>

      <div className="formula-box">
        dⁿ/dxⁿ (uv) = Σ (nCr) u⁽ⁿ⁻ʳ⁾ v⁽ʳ⁾
      </div>

      <p>Example:</p>
      <p>
        u = x², v = eˣ, n = 2
      </p>

      <div className="result-box">
        d²/dx² (x²eˣ) = x²eˣ + 4xeˣ + 2eˣ
      </div>
    </div>
  );
};

export default LeibnitzTheoremSimulator;
