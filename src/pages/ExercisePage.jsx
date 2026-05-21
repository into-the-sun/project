import { Link, useParams } from "react-router-dom";
import { getLesson } from "../data/lessons.js";
import ExerciseForm from "../components/ExerciseForm.jsx";

export default function ExercisePage() {
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <>
        <h1 className="page-title">Lesson not found</h1>
        <p>
          <Link to="/">Back to all lessons</Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="page-title">Practice: {lesson.title}</h1>
      <p className="progress-text">
        {lesson.exercises.length} exercise
        {lesson.exercises.length === 1 ? "" : "s"} — type your answer and
        click Check (or press Enter).
      </p>

      {lesson.exercises.map((exercise, index) => (
        <ExerciseForm
          key={exercise.id}
          exercise={exercise}
          number={index + 1}
        />
      ))}

      <div className="lesson-nav">
        <Link to={`/lesson/${lesson.id}`} className="btn btn-secondary">
          ← Back to lesson
        </Link>
        <Link to="/" className="btn btn-secondary">
          All lessons
        </Link>
      </div>
    </>
  );
}
