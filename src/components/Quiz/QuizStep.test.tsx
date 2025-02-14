import { render, screen, fireEvent } from '@testing-library/react'
import QuizStep from './QuizStep'

const mockQuestion = {
  question: "Test Question",
  type: "ChoiceType",
  options: [
    {
      display: "Option 1",
      value: "opt1",
      isRejection: false
    },
    {
      display: "Option 2",
      value: "opt2",
      isRejection: true
    }
  ]
}

describe('QuizStep', () => {
  const mockOnAnswer = jest.fn()
  const mockOnBack = jest.fn()
  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders question and options correctly', () => {
    render(
      <QuizStep
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
        onClose={mockOnClose}
        isFirstStep={false}
      />
    )

    expect(screen.getByText('Test Question')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onAnswer with correct values when option is clicked', () => {
    render(
      <QuizStep
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
        onClose={mockOnClose}
        isFirstStep={false}
      />
    )

    fireEvent.click(screen.getByText('Option 1'))
    expect(mockOnAnswer).toHaveBeenCalledWith('opt1', false)
  })

  it('shows back button when not on first step', () => {
    render(
      <QuizStep
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
        onClose={mockOnClose}
        isFirstStep={false}
      />
    )

    const backButton = screen.getByText('← Back')
    expect(backButton).toBeInTheDocument()
    fireEvent.click(backButton)
    expect(mockOnBack).toHaveBeenCalled()
  })

  it('shows exit button on first step', () => {
    render(
      <QuizStep
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
        onClose={mockOnClose}
        isFirstStep={true}
      />
    )

    const exitButton = screen.getByText('← Exit Quiz')
    expect(exitButton).toBeInTheDocument()
    fireEvent.click(exitButton)
    expect(mockOnClose).toHaveBeenCalled()
  })
})