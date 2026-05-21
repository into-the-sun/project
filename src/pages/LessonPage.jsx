import { Link, useParams } from "react-router-dom";
import { getLesson } from "../data/lessons.js";

export default function LessonPage() {
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
      <h1 className="page-title">{lesson.title}</h1>
      <p className="page-intro">{lesson.summary}</p>

      <h2 className="section-title">Explanation</h2>
      {lesson.explanation.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <h2 className="section-title">Examples</h2>
      {lesson.examples.map((example, index) => (
        <div key={index} className="example-box">
          <p className="example-japanese">{example.japanese}</p>
          <p className="example-romaji">{example.romaji}</p>
          <p className="example-english">{example.english}</p>
        </div>
      ))}

      <div className="lesson-nav">
        <Link to="/" className="btn btn-secondary">
          All lessons
        </Link>
        <Link
          to={`/lesson/${lesson.id}/exercise`}
          className="btn btn-primary"
        >
          Practice exercises →
        </Link>
      </div>
    </>
  );
}
