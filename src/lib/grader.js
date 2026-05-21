/**
 * Normalize an answer so small differences still count as correct.
 * - trims spaces
 * - lowercases romaji (は stays は; "Wa" becomes "wa")
 */
function normalize(answer) {
  return answer.trim().toLowerCase();
}

/**
 * Check if the student's answer matches any acceptable answer.
 */
export function isAnswerCorrect(userAnswer, acceptableAnswers) {
  const normalized = normalize(userAnswer);
  if (normalized === "") return false;

  return acceptableAnswers.some(
    (expected) => normalize(expected) === normalized
  );
}
