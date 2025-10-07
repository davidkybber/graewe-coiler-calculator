import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Calculator } from './Calculator'
import { CalculatorProvider } from './CalculatorProvider'

// Helper component to provide context
const CalculatorWithProvider = () => (
  <CalculatorProvider>
    <Calculator />
  </CalculatorProvider>
)

describe('Calculator Component', () => {
  it('should render calculator form', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByText('GRAEWE Produktrechner')).toBeInTheDocument()
    expect(screen.getByText('Berechnung der Wickellänge und Endposition für Rohre und Profile')).toBeInTheDocument()
  })

  it('should show calculation mode selection', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByText('Wickellänge')).toBeInTheDocument()
    expect(screen.getByText('Wickelendposition')).toBeInTheDocument()
  })

  it('should render action buttons', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByRole('button', { name: /zurücksetzen/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /berechnen/i })).toBeInTheDocument()
  })

  it('should show validation errors for required fields', () => {
    render(<CalculatorWithProvider />)
    
    // Initially, pipe diameter should show error since it's required
    expect(screen.getByText('Rohrdurchmesser ist erforderlich')).toBeInTheDocument()
  })

  it('should reset form when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // Fill some inputs
    const pipeDiameterInput = screen.getByTestId('pipe-diameter-input')
    const innerDiameterInput = screen.getByTestId('inner-diameter-input')
    
    await user.type(pipeDiameterInput, '20')
    await user.type(innerDiameterInput, '500')
    
    // Reset form
    const resetButton = screen.getByRole('button', { name: /zurücksetzen/i })
    await user.click(resetButton)
    
    // Check that inputs are cleared
    expect(pipeDiameterInput).toHaveValue(null)
    expect(innerDiameterInput).toHaveValue(null)
  })

  it('should show placeholder message when no results', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByText('Bereit für die Berechnung')).toBeInTheDocument()
    expect(screen.getByText('Geben Sie die erforderlichen Parameter ein, um die Berechnung zu starten')).toBeInTheDocument()
  })

  it('should enable calculate button when coil length form is complete', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // Select coil length mode (should be default)
    const coilLengthRadio = screen.getByDisplayValue('coil_length')
    await user.click(coilLengthRadio)
    
    // Fill all required fields for coil length calculation
    await user.type(screen.getByTestId('pipe-diameter-input'), '20')
    await user.type(screen.getByTestId('inner-diameter-input'), '500')
    await user.type(screen.getByTestId('outer-diameter-input'), '800')
    await user.type(screen.getByTestId('bundle-width-input'), '2000')
    
    // Calculate button should be enabled (not disabled)
    const calculateButton = screen.getByRole('button', { name: /berechnen/i })
    expect(calculateButton).not.toBeDisabled()
  })

  it('should enable calculate button when end position form is complete', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // Select end position mode
    const endPositionRadio = screen.getByDisplayValue('end_position')
    await user.click(endPositionRadio)
    
    // Fill all required fields for end position calculation
    await user.type(screen.getByTestId('pipe-diameter-input'), '20')
    await user.type(screen.getByTestId('inner-diameter-input'), '500')
    await user.type(screen.getByTestId('pipe-length-input'), '100')
    
    // Calculate button should be enabled (not disabled)
    const calculateButton = screen.getByRole('button', { name: /berechnen/i })
    expect(calculateButton).not.toBeDisabled()
  })

  it('should show different input fields based on calculation mode', async () => {
    const user = userEvent.setup()
    render(<CalculatorWithProvider />)
    
    // By default, coil length mode should be selected
    expect(screen.getByTestId('outer-diameter-input')).toBeInTheDocument()
    expect(screen.getByTestId('bundle-width-input')).toBeInTheDocument()
    expect(screen.queryByTestId('pipe-length-input')).not.toBeInTheDocument()
    
    // Switch to end position mode
    const endPositionRadio = screen.getByDisplayValue('end_position')
    await user.click(endPositionRadio)
    
    // Now pipe length should be visible
    expect(screen.getByTestId('pipe-length-input')).toBeInTheDocument()
    // Outer diameter and bundle width should still be visible but not required
  })

  it('should show coiling method selection', () => {
    render(<CalculatorWithProvider />)
    
    expect(screen.getByText('Ungleiche Lagen')).toBeInTheDocument()
    expect(screen.getByText('Gleiche Lagen versetzt')).toBeInTheDocument()
  })
})