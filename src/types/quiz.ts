interface QuizQuestion {
  question: string;
  type: string;
  options: Array<{
    display: string;
    value: string | boolean;
    isRejection: boolean;
  }>;
}

interface QuizData {
  questions: QuizQuestion[];
}

interface QuizState {
  currentStep: number;
  answers: Record<number, string>;
  isRejected: boolean;
}

export type { QuizQuestion, QuizData, QuizState };