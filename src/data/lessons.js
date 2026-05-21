/**
 * All lesson content lives here. Edit this file to add grammar or exercises.
 */
export const lessons = [
  {
    id: "particle-wa",
    title: "Particle は (wa)",
    summary: "Marks the topic of a sentence — what you're talking about.",
    explanation: [
      "The particle は is written with the hiragana は, but pronounced wa when it is a particle (not part of a word like はし).",
      "It tells the listener: \"As for this thing, here is some info about it.\"",
      "A very common pattern is: [topic] は [description] です.",
    ],
    examples: [
      {
        japanese: "私は学生です。",
        romaji: "Watashi wa gakusei desu.",
        english: "As for me, (I) am a student.",
      },
      {
        japanese: "これは本です。",
        romaji: "Kore wa hon desu.",
        english: "This is a book.",
      },
    ],
    exercises: [
      {
        id: "wa-1",
        prompt: "Fill in the topic particle: 私___学生です。",
        acceptableAnswers: ["は", "wa"],
        hint: "Topic particle (written は, sounds wa)",
      },
      {
        id: "wa-2",
        prompt: "Fill in: これ___ペンです。",
        acceptableAnswers: ["は", "wa"],
        hint: "Same particle as above",
      },
    ],
  },
  {
    id: "desu",
    title: "です (desu) — polite \"to be\"",
    summary: "Ends a sentence politely. Like saying \"is\" or \"am\" in English.",
    explanation: [
      "です goes at the end of a sentence to make it polite and complete.",
      "It often follows a noun or na-adjective: [noun] です = \"(it) is [noun]\".",
      "To say something is NOT, use ではありません instead of です.",
    ],
    examples: [
      {
        japanese: "彼は先生です。",
        romaji: "Kare wa sensei desu.",
        english: "He is a teacher.",
      },
      {
        japanese: "それは犬ではありません。",
        romaji: "Sore wa inu dewa arimasen.",
        english: "That is not a dog.",
      },
    ],
    exercises: [
      {
        id: "desu-1",
        prompt: "Complete politely: 私は日本人___。",
        acceptableAnswers: ["です", "desu"],
        hint: "Polite copula at the end",
      },
      {
        id: "desu-2",
        prompt: "Say \"is not\" politely (one word): これは本___。",
        acceptableAnswers: ["ではありません", "dewa arimasen", "じゃありません", "ja arimasen"],
        hint: "Negative of です",
      },
    ],
  },
  {
    id: "particle-wo",
    title: "Particle を (wo/o)",
    summary: "Marks the direct object — the thing being acted on.",
    explanation: [
      "を comes after the noun that receives the action of a verb.",
      "Example pattern: [object] を [verb].",
      "It is often pronounced more like \"o\" in fast speech, but written を.",
    ],
    examples: [
      {
        japanese: "水を飲みます。",
        romaji: "Mizu o nomimasu.",
        english: "I drink water.",
      },
      {
        japanese: "本を読みます。",
        romaji: "Hon o yomimasu.",
        english: "I read a book.",
      },
    ],
    exercises: [
      {
        id: "wo-1",
        prompt: "Fill in the object particle: ご飯___食べます。",
        acceptableAnswers: ["を", "wo", "o"],
        hint: "Object marker before the verb",
      },
      {
        id: "wo-2",
        prompt: "Fill in: 日本語___勉強します。",
        acceptableAnswers: ["を", "wo", "o"],
        hint: "What you study is marked with this particle",
      },
    ],
  },
];

/** Find one lesson by its id, or undefined if missing. */
export function getLesson(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId);
}
