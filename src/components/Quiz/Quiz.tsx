'use client';

import { useState } from 'react';
import { QuizData, QuizState } from '@/types/quiz';
import QuizStep from './QuizStep';
import Results from './Results';
import { styled } from 'styled-components';

interface QuizProps {
  data: QuizData;
  onClose: () => void;
}

const QuizOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Quiz({ data, onClose }: QuizProps) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 0,
    answers: {},
    isRejected: false
  });

  const handleAnswer = (value: string, isRejection: boolean) => {
    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentStep]: value },
      currentStep: prev.currentStep + 1,
      isRejected: isRejection
    }));
  };

  const handleBack = () => {
    setQuizState(prev => ({
      ...prev,
      currentStep: prev.currentStep - 1
    }));
  };

  const isLastStep = quizState.currentStep === data.questions.length;

  return (
    <QuizOverlay>
      {isLastStep || quizState.isRejected ? (
        <Results
          answers={quizState.answers}
          isRejected={quizState.isRejected}
        />
      ) : (
        <QuizStep
          question={data.questions[quizState.currentStep]}
          selectedValue={quizState.answers[quizState.currentStep]}
          onAnswer={handleAnswer}
          onBack={quizState.currentStep > 0 ? handleBack : undefined}
          onClose={onClose}
          isFirstStep={quizState.currentStep === 0}
        />
      )}
    </QuizOverlay>
  );
}