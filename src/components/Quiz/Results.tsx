import styled from 'styled-components';

const ResultsContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2<{ $isRejected: boolean }>`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.$isRejected ? '#7E0707' : '#0B3B3C'};
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: #0B3B3C;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;

  &:hover {
    background: #0d4647;
  }
`;

interface ResultsProps {
  answers: Record<number, string>;
  isRejected: boolean;
}

export default function Results({
  isRejected,
}: ResultsProps) {

  const handleContinue = () => {
    window.location.assign('https://www.manual.co');
  };

  return (
    <ResultsContainer>
      <Title $isRejected={isRejected}>
        {isRejected
          ? "Important Notice"
          : "Great news!"
        }
      </Title>
      <Message>
        {isRejected
          ? "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
          : "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!"
        }
      </Message>
      <div>
        {!isRejected && (
          <Button onClick={handleContinue}>Continue →</Button>
        )}
      </div>
    </ResultsContainer>
  );
}
