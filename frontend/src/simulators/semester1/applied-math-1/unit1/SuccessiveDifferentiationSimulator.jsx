import React, { useState } from "react";

const SuccessiveDifferentiationSimulator = () => {
  const [order, setOrder] = useState(1);

  return (
    <div>
      <h3>🔁 Successive Differentiation</h3>
      <p>Given function: <b>f(x) = x³</b></p>

      <label>Select derivative order:</label>
      <input
        type="number"
        min="1"
        max="3"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />

      <div className="result-box">
        {order == 1 && "f′(x) = 3x²"}
        {order == 2 && "f″(x) = 6x"}
        {order == 3 && "f‴(x) = 6"}
      </div>
    </div>
  );
};

export default SuccessiveDifferentiationSimulator;
