import { createSlice } from '@reduxjs/toolkit'
import { initialStepperType } from 'types/stepperSteps.types'

const initialState: initialStepperType = {
  steps: [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ],
  currentStep: 1,
}

export const stepperSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    firstStep: (state) => {
      state.currentStep = 1
    },
    stepForward: (state) => {
      state.currentStep += 1
    },
    finalStep: (state) => {
      state.currentStep = 4
    },
    stepperBack: (state) => {
      state.currentStep -= 1
    },
  },
})
export const { stepForward, stepperBack, firstStep, finalStep } =
  stepperSlice.actions
