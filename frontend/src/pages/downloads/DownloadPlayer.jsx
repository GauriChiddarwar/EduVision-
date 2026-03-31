import { useParams } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./DownloadsPlayer.css";

/* PDF worker */
pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* ===================== DOWNLOAD MAP ===================== */

const downloadMap = {
  1: {
    "applied-mathematics-i": {
      1: [
        {
          title: "📘 Notes",
          file: "/downloads/semester1/applied-math-1/unit1/notes.pdf",
        },
        {
          title: "❓ Question Bank",
          file: "/downloads/semester1/applied-math-1/unit1/questions.pdf",
        },
        {
          title: "📄 Syllabus",
          file: "/downloads/semester1/applied-math-1/unit1/syllabus.pdf",
        },
      ],
    },
  },

  /* ===== Semester 6 ===== */

  6: {
    "seminar-topics": {
      1: [
        {
          title: "📄 Seminar Topics",
          file: "/downloads/semester6/seminar-topics.pdf",
        },
      ],
    },
  },
};

const DownloadsPlayer = () => {

  const { sem, subject, unit } = useParams();

  const semNumber = parseInt(sem);
  const unitNumber = parseInt(unit);

  const [previewFile, setPreviewFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1.2);

  /* Convert subject URL to key */
  const keySubject = decodeURIComponent(subject)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/–/g, "-")
    .replace(/-+/g, "-");

  const files = downloadMap[semNumber]?.[keySubject]?.[unitNumber];

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="downloads-player-page">

      <h2 className="page-title">
        {decodeURIComponent(subject).replace(/-/g, " ")} – Unit {unitNumber}
      </h2>

      {/* ================= FILE LIST ================= */}

      {files ? (
        <div className="downloads-grid">

          {files.map((item, index) => (

            <div key={index} className="download-card">

              <h3>{item.title}</h3>

              <div className="download-actions">

                <button
                  className="preview-btn"
                  onClick={() => {
                    setPreviewFile(item.file);
                    setZoom(1.2);
                  }}
                >
                  👁 Preview
                </button>

                <a
                  href={item.file}
                  download
                  className="download-btn"
                >
                  ⬇ Download
                </a>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="no-downloads">
          <p>🚧 Downloads not available yet.</p>
        </div>

      )}

      {/* ================= PDF VIEWER ================= */}

      {previewFile && (

        <div className="pdf-viewer">

          <div className="viewer-header">

            <span>
              Page {pageNumber} of {numPages || "--"}
            </span>

            <div className="viewer-controls">

              <button onClick={() => setZoom(z => z + 0.2)}>＋</button>

              <button onClick={() => setZoom(z => Math.max(0.6, z - 0.2))}>
                －
              </button>

              <button onClick={() => setPreviewFile(null)}>✖</button>

            </div>

          </div>

          <Document
            file={previewFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >

            <Page pageNumber={pageNumber} scale={zoom} />

          </Document>

          <div className="page-controls">

            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(p => p - 1)}
            >
              ◀ Previous
            </button>

            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(p => p + 1)}
            >
              Next ▶
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default DownloadsPlayer;