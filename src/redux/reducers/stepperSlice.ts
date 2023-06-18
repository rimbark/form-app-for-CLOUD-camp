import { createSlice } from '@reduxjs/toolkit'
import { InitialStepperType } from 'types/stepperSteps.types'

const initialState: InitialStepperType = {
  steps: [
    { title: '1', description: 'Contact Info' },
    { title: '2', description: 'Advantages' },
    { title: '3', description: 'About' },
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
