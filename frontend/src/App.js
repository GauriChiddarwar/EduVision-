import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* ================= COMMON ================= */
import Navbar from "./components/Navbar";

/* ================= PUBLIC PAGES ================= */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

/* ================= DASHBOARD ================= */
import StudentDashboard from "./pages/dashboard/StudentDashboard";

/* ================= ANIMATION FLOW ================= */
import SemesterSelection from "./pages/animation/SemesterSelection";
import SubjectSelection from "./pages/animation/SubjectSelection";
import UnitSelection from "./pages/animation/UnitSelection";
import VideoPlayer from "./pages/animation/VideoPlayer";

/* ================= INTERVIEW ================= */
import Aptitude from "./pages/interview/Aptitude";
import HRInterview from "./pages/interview/HRInterview";
import TechnicalInterview from "./pages/interview/TechnicalInterview";
import ResumeTips from "./pages/interview/ResumeTips";

/* ================= SIMULATOR FLOW ================= */
import SimulatorDashboard from "./pages/simulator/SimulatorDashboard";
import SimulatorSemesterSelection from "./pages/simulator/SemesterSelection";
import SimulatorSubjectSelection from "./pages/simulator/SubjectSelection";
import SimulatorUnitSelection from "./pages/simulator/UnitSelection";
import SimulatorPlayer from "./pages/simulator/SimulatorPlayer";

/* ================= SIMULATORS ================= */
import Unit1Simulator from "./simulators/semester1/applied-math-1/unit1/Unit1Simulator";
import Unit2Simulator from "./simulators/semester1/applied-math-1/unit2/Unit2Simulator";
import Unit3Simulator from "./simulators/semester1/applied-math-1/unit3/Unit3Simulator";
import Unit4ODESimulator from "./simulators/semester1/applied-math-1/unit4/Unit4ODESimulator";
import Unit5DESimulator from "./simulators/semester1/applied-math-1/unit5/Unit5DESimulator";
import Unit6InfiniteSeriesSimulator from "./simulators/semester1/applied-math-1/unit6/Unit6InfiniteSeriesSimulator";


import Unit1ComputerProgrammingSimulator 
from "./simulators/semester1/computer-programming/unit1/Unit1ComputerProgrammingSimulator";
import CFundamentalsSimulator 
from "./simulators/semester1/computer-programming/unit2/CFundamentalsSimulator";
import CControlConstructSimulator from
"./simulators/semester1/computer-programming/unit3/CControlConstructSimulator";



/* ================= DOWNLOADS FLOW ================= */
import DownloadsDashboard from "./pages/downloads/DownloadsDashboard";
import DownloadsSemesterSelection from "./pages/downloads/SemesterSelection";
import DownloadsSubjectSelection from "./pages/downloads/SubjectSelection";
import DownloadsUnitSelection from "./pages/downloads/UnitSelection";
import DownloadPlayer from "./pages/downloads/DownloadPlayer";


import AppliedMathUnit1Downloads 
from "./pages/downloads/semester1/applied-math-1/unit1/AppliedMathUnit1Downloads";
/* ================= LAYOUT ================= */
const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/student-dashboard",
    "/animation/semester",
    "/simulator",
  ];

  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

/* ================= APP ================= */
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* ===== STUDENT DASHBOARD ===== */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />

          {/* ===== ANIMATION FLOW ===== */}
          <Route path="/animation/semester" element={<SemesterSelection />} />
          <Route path="/animation/semester/:sem" element={<SubjectSelection />} />
          <Route
            path="/animation/semester/:sem/subject/:subject"
            element={<UnitSelection />}
          />
          <Route
            path="/animation/semester/:sem/subject/:subject/unit/:unit"
            element={<VideoPlayer />}
          />

          {/* ===== INTERVIEW ===== */}
          <Route path="/interview/aptitude" element={<Aptitude />} />
          <Route path="/interview/hr" element={<HRInterview />} />
          <Route path="/interview/technical" element={<TechnicalInterview />} />
          <Route path="/interview/resume" element={<ResumeTips />} />

          {/* ===== SIMULATOR FLOW ===== */}
          <Route path="/simulator" element={<SimulatorDashboard />} />
          <Route path="/simulator/semester" element={<SimulatorSemesterSelection />} />
          <Route
            path="/simulator/semester/:sem"
            element={<SimulatorSubjectSelection />}
          />
          <Route
            path="/simulator/semester/:sem/subject/:subject"
            element={<SimulatorUnitSelection />}
          />
          <Route
            path="/simulator/semester/:sem/subject/:subject/unit/:unit"
            element={<SimulatorPlayer />}
          />

          {/* ===== DIRECT TEST ROUTE (KEEP FOR NOW) ===== */}
          <Route
            path="/simulator/semester/1/subject/applied-math-1/unit/1"
            element={<Unit1Simulator />}
          />
          <Route
              path="/simulator/semester/1/subject/applied-math-1/unit/2"
              element={<Unit2Simulator />}
          />
          
          <Route
            path="/simulator/semester/1/subject/applied-math-1/unit/3"
           element={<Unit3Simulator />}
          />
           
           <Route
            path="/simulator/semester/1/subject/applied-math-1/unit/4"
            element={<Unit4ODESimulator />}
          />
          

          <Route
           path="/simulator/semester/1/subject/applied-math-1/unit/5"
           element={<Unit5DESimulator />}
          />

          <Route
            path="/simulator/semester/1/subject/applied-math-1/unit/6"
            element={<Unit6InfiniteSeriesSimulator />}
          />

          <Route
            path="/simulator/semester/1/subject/computer-programming/unit/1"
            element={<Unit1ComputerProgrammingSimulator />}
          />

          <Route
             path="/simulator/semester/1/subject/computer-programming/unit/2"
             element={<CFundamentalsSimulator />}
          />

           <Route
               path="/simulator/semester/1/subject/computer-programming/unit/3"
               element={<CControlConstructSimulator />}
           /> 

           <Route path="/downloads" element={<DownloadsDashboard />} />
<Route path="/downloads/semester" element={<DownloadsSemesterSelection />} />
<Route path="/downloads/semester/:sem" element={<DownloadsSubjectSelection />} />
<Route
  path="/downloads/semester/:sem/subject/:subject"
  element={<DownloadsUnitSelection />}
/>
<Route
  path="/downloads/semester/:sem/subject/:subject/unit/:unit"
  element={<DownloadPlayer />}
/>

<Route
  path="/downloads/semester/1/applied-math-1/unit/1"
  element={<AppliedMathUnit1Downloads />}
/>




        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
