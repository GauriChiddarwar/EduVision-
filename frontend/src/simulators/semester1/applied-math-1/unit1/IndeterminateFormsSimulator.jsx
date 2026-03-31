import React, { useState } from "react";

const IndeterminateFormsSimulator = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>⚠️ Indeterminate Forms</h3>
      <p>
        Example:
        <br />
        lim (x→0) sinx / x
      </p>

      <button onClick={() => setShow(true)}>Solve Limit</button>

      {show && (
        <div className="result-box">
          Apply L’Hôpital’s Rule:
          <br />
          lim (x→0) cosx / 1 = <b>1</b>
        </div>
      )}
    </div>
  );
};

export default IndeterminateFormsSimulator;
