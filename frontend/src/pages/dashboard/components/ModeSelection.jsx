import React from "react";
import { motion } from "framer-motion";
import "../../../styles/dashboard/ModeSelection.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const ModeSelection = ({ onSelect }) => {
  const modes = [
    { key: "theory", title: "Theory", icon: "📘" },
    { key: "practical", title: "Practical", icon: "🧪" },
    { key: "interview", title: "Interview", icon: "💼" },
  ];

  return (
    <>
      <h2 className="dashboard-title">Select Learning Mode</h2>

      <div className="dashboard-options">
        {modes.map((mode, index) => (
          <motion.div
            key={mode.key}
            className="dashboard-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(mode.key)}
          >
            <span className="card-icon">{mode.icon}</span>
            <h3>{mode.title}</h3>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ModeSelection;
