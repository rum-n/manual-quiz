import { render, screen, fireEvent } from '@testing-library/react'
import Quiz from './Quiz'

const mockQuizData = {
  questions: [
    {
      question: "Question 1",
      type: "ChoiceType",
      options: [
        {
          display: "Option 1",
          value: "opt1",
          isRejection: false
        }
      ]
    },
    {
      question: "Question 2",
      type: "ChoiceType",
      options: [
        {
          display: "Option 2",
          value: "opt2",
          isRejection: false
        }
      ]
    }
  ]
}

describe('Quiz', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders first question initially', () => {
    render(<Quiz data={mockQuizData} onClose={mockOnClose} />)
    expect(screen.getByText('Question 1')).toBeInTheDocument()
  })

  it('progresses through questions when answering', () => {
    render(<Quiz data={mockQuizData} onClose={mockOnClose} />)

    fireEvent.click(screen.getByText('Option 1'))
    expect(screen.getByText('Question 2')).toBeInTheDocument()
  })

  it('shows results when all questions are answered', () => {
    render(<Quiz data={mockQuizData} onClose={mockOnClose} />)

    fireEvent.click(screen.getByText('Option 1'))
    fireEvent.click(screen.getByText('Option 2'))

    expect(screen.getByText('Great news!')).toBeInTheDocument()
  })

  it('allows going back to previous questions', () => {
    render(<Quiz data={mockQuizData} onClose={mockOnClose} />)

    fireEvent.click(screen.getByText('Option 1'))
    expect(screen.getByText('Question 2')).toBeInTheDocument()

    fireEvent.click(screen.getByText('← Back'))
    expect(screen.getByText('Question 1')).toBeInTheDocument()
  })
})