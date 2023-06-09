import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import AOS from "aos";
import { setBookmarks } from "shared/utils/ReduxReducer";
import "aos/dist/aos.css";

const LandingPage = lazy(() => import("pages/Landing"));
const NotFoundPage = lazy(() => import("pages/NotFound"));
const SavedClientsPage = lazy(() => import("pages/SavedClients"));
const DetailClientPage = lazy(() => import("pages/DetailClient"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSavedClient = localStorage.getItem("SavedClient");
    if (getSavedClient) {
      dispatch(setBookmarks(JSON.parse(getSavedClient)));
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/saved-clients" element={<SavedClientsPage />} />
          <Route path="/client/:id" element={<DetailClientPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
