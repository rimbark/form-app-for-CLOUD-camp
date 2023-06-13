import { createSlice } from '@reduxjs/toolkit'
import { initialStepType } from '../../types/steps.types'

const initialState: initialStepType = {
  steps: [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ],
  currentStep: 1,
}

const stepSlicer = createSlice({
  name: 'step',
  initialState,
  reducers: {
    stepForward: (state) => {
      state.currentStep += 1
    },
    stepBack: (state) => {
      state.currentStep -= 1
    },
  },
})
export const { stepForward, stepBack } = stepSlicer.actions
export default stepSlicer.reducer
