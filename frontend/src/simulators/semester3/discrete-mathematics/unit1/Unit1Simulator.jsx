import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Unit1Simulator.css"; // CSS file inside unit1/styles

const Unit1Simulator = () => {
  const navigate = useNavigate();

  return (
    <div className="unit1-page">
      {/* Header */}
      <div className="unit1-header">
        <h1>📘 Discrete Mathematics</h1>
        <h2>Unit 1: Logic & Proofs</h2>
        <p>
          Interactive simulators for understanding logic, truth tables,
          equivalences, satisfiability, predicates, and inference rules.
        </p>
      </div>

      {/* Simulator Cards */}
      <div className="simulator-grid">
        <div
          className="sim-card"
          onClick={() => navigate("/simulator/unit1/truth-table")}
        >
          <h3>🔢 Truth Table Simulator</h3>
          <p>
            Explore propositions, logical operators, and compound expressions.
          </p>
        </div>

        <div
          className="sim-card"
          onClick={() => navigate("/simulator/unit1/demorgan")}
        >
          <h3>🔄 De Morgan’s Laws</h3>
          <p>
            Visualize logical equivalences and De Morgan’s transformations.
          </p>
        </div>

        <div
          className="sim-card"
          onClick={() => navigate("/simulator/unit1/satisfiability")}
        >
          <h3>🧩 Satisfiability</h3>
          <p>
            Check whether a logical expression can be satisfied.
          </p>
        </div>

        <div
          className="sim-card"
          onClick={() => navigate("/simulator/unit1/predicate")}
        >
          <h3>🔍 Predicate Logic</h3>
          <p>
            Understand predicates, quantifiers (∀, ∃), and domains.
          </p>
        </div>
      </div>

      {/* Footer Tip */}
      <div className="unit1-footer">
        💡 Tip: Try different inputs in simulators to understand logic deeply.
      </div>
    </div>
  );
};

export default Unit1Simulator;
