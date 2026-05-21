import { useState } from "react";
import { isAnswerCorrect } from "../lib/grader.js";

export default function ExerciseForm({ exercise, number }) {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleCheck() {
    const correct = isAnswerCorrect(answer, exercise.acceptableAnswers);
    setIsCorrect(correct);
    setChecked(true);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleCheck();
    }
  }

  return (
    <div className="exercise-block">
      <p className="exercise-prompt">
        {number}. {exercise.prompt}
      </p>
      <div className="exercise-input-row">
        <input
          className="exercise-input"
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setChecked(false);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Your answer"
          aria-label={`Answer for exercise ${number}`}
        />
        <button type="button" className="btn btn-primary" onClick={handleCheck}>
          Check
        </button>
      </div>
      {checked && (
        <p
          className={
            isCorrect ? "exercise-feedback correct" : "exercise-feedback wrong"
          }
        >
          {isCorrect ? "Correct! よくできました！" : "Not quite — try again."}
        </p>
      )}
      {checked && !isCorrect && exercise.hint && (
        <p className="exercise-hint">Hint: {exercise.hint}</p>
      )}
    </div>
  );
}
