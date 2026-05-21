import { lessons } from "../data/lessons.js";
import LessonCard from "../components/LessonCard.jsx";

export default function Home() {
  return (
    <>
      <h1 className="page-title">Beginner Japanese Grammar</h1>
      <p className="page-intro">
        Short lessons and practice exercises for people who already know
        hiragana and very basic phrases. Pick a lesson to read, then try the
        exercises.
      </p>
      <ul className="lesson-list">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </>
  );
}
