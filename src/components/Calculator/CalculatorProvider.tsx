import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { 
  CalculatorState, 
  CalculatorAction,
  CalculationMode,
  CoilMethod
} from '../../types/CalculatorTypes'

// Initial state
const initialState: CalculatorState = {
  params: {
    pipeDiameter: undefined,
    pipeLength: undefined,
    innerDiameter: undefined,
    outerDiameter: undefined,
    bundleWidth: undefined,
    pipesPerLayer: undefined,
    calculationMode: CalculationMode.COIL_LENGTH,
    coilMethod: CoilMethod.UNEVEN_LAYERS
  },
  result: null,
  errors: {},
  isCalculating: false
}

// Reducer function
const calculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
  switch (action.type) {
    case 'SET_PARAM':
      return {
        ...state,
        params: {
          ...state.params,
          [action.field]: action.value
        },
        // Clear related errors when user changes input
        errors: {
          ...state.errors,
          [action.field]: undefined
        }
      }

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      }

    case 'START_CALCULATION':
      return {
        ...state,
        isCalculating: true,
        result: null
      }

    case 'SET_RESULT':
      return {
        ...state,
        isCalculating: false,
        result: action.result
      }

    case 'RESET_CALCULATOR':
      return initialState

    default:
      return state
  }
}

// Context
const CalculatorContext = createContext<{
  state: CalculatorState
  dispatch: React.Dispatch<CalculatorAction>
} | null>(null)

// Provider component
interface CalculatorProviderProps {
  children: ReactNode
}

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  )
}

// Custom hook to use calculator context
export const useCalculator = () => {
  const context = useContext(CalculatorContext)
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider')
  }
  return context
}
