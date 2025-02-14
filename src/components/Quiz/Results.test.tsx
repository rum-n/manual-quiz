import { render, screen, fireEvent } from '@testing-library/react'
import Results from './Results'

describe('Results', () => {
  const mockAnswers = { 0: 'test', 1: 'test2' }

  it('renders success message when not rejected', () => {
    render(<Results answers={mockAnswers} isRejected={false} />)

    expect(screen.getByText('Great news!')).toBeInTheDocument()
    expect(screen.getByText(/perfect treatment/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument()
  })

  it('renders rejection message when rejected', () => {
    render(<Results answers={mockAnswers} isRejected={true} />)

    expect(screen.getByText('Important Notice')).toBeInTheDocument()
    expect(screen.getByText(/unable to prescribe/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /continue/i })).not.toBeInTheDocument()
  })

  it('redirects to manual.co when continue button is clicked', () => {
    const originalLocation = window.location;
    // @ts-expect-error Intentionally modifying window for test
    delete window.location;

    window.location = new URL('http://localhost') as unknown as Location;
    const mockAssign = jest.fn();
    Object.defineProperty(window.location, 'assign', {
      configurable: true,
      value: mockAssign,
    });

    render(<Results answers={mockAnswers} isRejected={false} />)

    fireEvent.click(screen.getByRole('button', { name: /continue/i }))
    expect(mockAssign).toHaveBeenCalledWith('https://www.manual.co')

    window.location = originalLocation;
  })
})