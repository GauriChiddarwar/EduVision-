const KirchhoffCircuitSimulator = () => {
  return (
    <div>
      <h3>⚡ Electrical Circuits (Kirchhoff’s Law)</h3>

      <p><b>Kirchhoff’s Voltage Law:</b></p>
      <div className="formula-box">
        ΣV = 0
      </div>

      <div className="result-box">
        RLC Circuit Differential Equation: <br />
        L d²q/dt² + R dq/dt + q/C = E(t) <br />
        Converted to Differential Equation <br />
        Solved using standard methods
      </div>
    </div>
  );
};

export default KirchhoffCircuitSimulator;
