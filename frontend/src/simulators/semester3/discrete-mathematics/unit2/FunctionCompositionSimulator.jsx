import React, { useState } from "react";
import "./styles/FunctionCompositionSimulator.css";

const FunctionCompositionSimulator = () => {
  const [f, setF] = useState("");
  const [g, setG] = useState("");
  const [result, setResult] = useState("");

  const compose = () => {
    const fMap = Object.fromEntries(f.split(",").map(p => p.split(":")));
    const gMap = Object.fromEntries(g.split(",").map(p => p.split(":")));

    let comp = {};
    for (let x in gMap) {
      if (fMap[gMap[x]]) comp[x] = fMap[gMap[x]];
    }
    setResult(JSON.stringify(comp));
  };

  return (
    <div className="function-page">
      <h2>Function Composition Simulator</h2>

      <input
        placeholder="f (e.g. a:b,b:c)"
        onChange={(e) => setF(e.target.value)}
      />

      <input
        placeholder="g (e.g. x:a,y:b)"
        onChange={(e) => setG(e.target.value)}
      />

      <button onClick={compose}>Compose f(g(x))</button>

      {result && <p className="output">{result}</p>}
    </div>
  );
};

export default FunctionCompositionSimulator;
