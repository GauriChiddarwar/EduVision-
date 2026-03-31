const LinearDESimulator = () => {
  return (
    <div>
      <h3>📐 Linear Differential Equation</h3>
      <p>Standard form:</p>
      <div className="formula-box">dy/dx + P(x)y = Q(x)</div>

      <p><b>Example:</b></p>
      <div className="formula-box">dy/dx + y = eˣ</div>

      <div className="result-box">
        Integrating Factor (IF) = e<sup>∫1 dx</sup> = eˣ <br />
        Solution: y·eˣ = ∫e²ˣ dx + C
      </div>
    </div>
  );
};

export default LinearDESimulator;
