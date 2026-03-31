const NonHomogeneousDESimulator = () => {
  return (
    <div>
      <h3>📊 Non-Homogeneous Differential Equation</h3>
      <p>Form:</p>
      <div className="formula-box">dy/dx + P(x)y = Q(x), Q(x) ≠ 0</div>

      <p><b>Example:</b></p>
      <div className="formula-box">dy/dx + y = x</div>

      <div className="result-box">
        IF = eˣ <br />
        y·eˣ = ∫x·eˣ dx + C <br />
        ✅ Non-homogeneous DE solved using Linear method
      </div>
    </div>
  );
};

export default NonHomogeneousDESimulator;
