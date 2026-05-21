import { Link } from "react-router-dom";

export default function LessonCard({ lesson }) {
  return (
    <li className="lesson-card">
      <h2>{lesson.title}</h2>
      <p>{lesson.summary}</p>
      <div className="lesson-card-actions">
        <Link to={`/lesson/${lesson.id}`} className="btn btn-primary">
          Read lesson
        </Link>
        <Link to={`/lesson/${lesson.id}/exercise`} className="btn btn-secondary">
          Practice
        </Link>
      </div>
    </li>
  );
}
