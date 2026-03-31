const OperatorsSimulator = () => {
  return (
    <div>
      <h3>➗ Operators & Precedence</h3>

      <ul className="c-list">
        <li>Arithmetic: + − * / %</li>
        <li>Relational: &lt; &gt; == !=</li>
        <li>Logical: && || !</li>
        <li>Assignment: = += -=</li>
      </ul>

      <p className="c-note">
        Operator precedence defines order of evaluation.
      </p>
    </div>
  );
};

export default OperatorsSimulator;
