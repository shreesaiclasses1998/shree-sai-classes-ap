
export enum View {
  HOME,
  EXPLAINER,
  QUIZ
}

export enum Subject {
  PHYSICS = 'Physics',
  CHEMISTRY = 'Chemistry',
  BIOLOGY = 'Biology',
  MATH = 'Mathematics'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
