import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import LessonPage from "./pages/LessonPage.jsx";
import ExercisePage from "./pages/ExercisePage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/lesson/:lessonId/exercise" element={<ExercisePage />} />
      </Routes>
    </Layout>
  );
}
