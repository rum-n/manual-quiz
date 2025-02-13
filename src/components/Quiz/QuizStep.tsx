import styled from 'styled-components';
import { QuizQuestion } from '@/types/quiz';
import QuizImage from './QuizImage';

const StepContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Option = styled.button<{ selected: boolean }>`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? '#000' : '#eee'};
  border-radius: 8px;
  background: white;
  color: #0B3B3C;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.2rem;

  &:hover {
    border-color: #000;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #0B3B3C;
`;

interface QuizStepProps {
  question: QuizQuestion;
  selectedValue?: string;
  onAnswer: (value: string, isRejection: boolean) => void;
  onBack?: () => void;
  onClose?: () => void;
  isFirstStep?: boolean;
}

export default function QuizStep({
  question,
  selectedValue,
  onAnswer,
  onBack,
  onClose,
  isFirstStep
}: QuizStepProps) {
  return (
    <StepContainer>
      {(onBack || isFirstStep) && (
        <BackButton onClick={isFirstStep ? onClose : onBack}>
          ← {isFirstStep ? 'Exit Quiz' : 'Back'}
        </BackButton>
      )}

      <Question>{question.question}</Question>

      <OptionsGrid>
        {question.options.map((option) => (
          <Option
            key={option.value.toString()}
            selected={selectedValue === option.value.toString()}
            onClick={() => onAnswer(option.value.toString(), option.isRejection)}
          >
            {option.display.includes('<img') ? (
              <QuizImage display={option.display} />
            ) : (
              option.display
            )}
          </Option>
        ))}
      </OptionsGrid>
    </StepContainer>
  );
}
