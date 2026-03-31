import React, { useState } from "react";
import "./styles/EquivalenceClassesSimulator.css";

const EquivalenceClassesSimulator = () => {
  const [setA, setSetA] = useState("");
  const [relation, setRelation] = useState("");
  const [classes, setClasses] = useState([]);

  const generateClasses = () => {
    const A = setA.split(",").map(x => x.trim());
    const R = relation.split(";").map(p =>
      p.replace(/[()]/g, "").split(",").map(x => x.trim())
    );

    let visited = new Set();
    let result = [];

    A.forEach(a => {
      if (!visited.has(a)) {
        const eqClass = R.filter(([x]) => x === a).map(([_, y]) => y);
        eqClass.forEach(x => visited.add(x));
        result.push(eqClass);
      }
    });

    setClasses(result);
  };

  return (
    <div className="eqclass-page">
      <h2>Equivalence Classes Generator</h2>

      <input
        placeholder="Set A (e.g. 1,2,3)"
        value={setA}
        onChange={(e) => setSetA(e.target.value)}
      />

      <input
        placeholder="Relation (e.g. (1,1);(1,2);(2,1);(2,2))"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      />

      <button onClick={generateClasses}>Generate</button>

      <div className="result">
        {classes.map((c, i) => (
          <div key={i} className="box">
            [{c.join(", ")}]
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquivalenceClassesSimulator;
