import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calculator } from './Calculator'
import { CalculatorProvider } from './CalculatorProvider'

const CalculatorWithProvider = () => (
  <CalculatorProvider>
    <Calculator />
  </CalculatorProvider>
)

describe('Calculator Component', () => {
  it('should render all input fields', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByLabelText(/wire diameter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of turns/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/core diameter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/core length/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/core material/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/wire material/i)).toBeInTheDocument()
  })

  it('should render action buttons', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument()
  })

  it('should show validation errors for invalid inputs', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    const wireInput = screen.getByTestId('wire-diameter-input')
    await user.type(wireInput, '0')
    
    await waitFor(() => {
      expect(screen.getByText(/wire diameter must be/i)).toBeInTheDocument()
    })
  })

  it('should reset form when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // Fill some inputs
    const wireInput = screen.getByTestId('wire-diameter-input')
    const turnsInput = screen.getByTestId('number-of-turns-input')
    
    await user.type(wireInput, '0.5')
    await user.type(turnsInput, '100')
    
    // Click reset
    const resetButton = screen.getByRole('button', { name: /reset/i })
    await user.click(resetButton)
    
    // Check inputs are cleared
    expect(wireInput).toHaveValue(null)
    expect(turnsInput).toHaveValue(null)
  })

  it('should show placeholder message when no results', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByText(/enter coil parameters above/i)).toBeInTheDocument()
  })

  it('should enable calculate button when form is complete and valid', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // Fill all required fields
    await user.type(screen.getByTestId('wire-diameter-input'), '0.5')
    await user.type(screen.getByTestId('number-of-turns-input'), '100')
    await user.type(screen.getByTestId('core-diameter-input'), '10')
    await user.type(screen.getByTestId('core-length-input'), '20')
    
    await waitFor(() => {
      const calculateButton = screen.getByRole('button', { name: /calculate/i })
      expect(calculateButton).not.toBeDisabled()
    })
  })
})
