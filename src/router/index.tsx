import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("../pages/Landing"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
