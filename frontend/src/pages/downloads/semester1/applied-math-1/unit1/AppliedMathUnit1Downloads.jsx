import "./Downloads.css";

const AppliedMathUnit1Downloads = () => {
  const basePath = "/downloads/semester1/applied-math-1/unit1";

  return (
    <div className="downloads-page">
      <h2>Applied Mathematics – I | Unit 1</h2>

      {/* ===== NOTES ===== */}
      <div className="pdf-card">
        <h3>📘 Notes</h3>
        <iframe
          src={`${basePath}/notes.pdf`}
          title="Notes PDF"
        />
        <a href={`${basePath}/notes.pdf`} download>
          ⬇️ Download Notes
        </a>
      </div>

      {/* ===== QUESTIONS ===== */}
      <div className="pdf-card">
        <h3>❓ Question Bank</h3>
        <iframe
          src={`${basePath}/questions.pdf`}
          title="Questions PDF"
        />
        <a href={`${basePath}/questions.pdf`} download>
          ⬇️ Download Questions
        </a>
      </div>

      {/* ===== SYLLABUS ===== */}
      <div className="pdf-card">
        <h3>📄 Syllabus</h3>
        <iframe
          src={`${basePath}/syllabus.pdf`}
          title="Syllabus PDF"
        />
        <a href={`${basePath}/syllabus.pdf`} download>
          ⬇️ Download Syllabus
        </a>
      </div>
    </div>
  );
};

export default AppliedMathUnit1Downloads;
