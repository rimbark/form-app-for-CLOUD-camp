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

const stepperSlicer = createSlice({
  name: 'step',
  initialState,
  reducers: {
    stepForward: (state) => {
      state.currentStep += 1
    },
    stepperBack: (state) => {
      state.currentStep -= 1
    },
    hereWeGoAgain: (state) => {
      state.currentStep = 1
    },
  },
})
export const { stepForward, stepperBack, hereWeGoAgain } = stepperSlicer.actions
export default stepperSlicer.reducer
