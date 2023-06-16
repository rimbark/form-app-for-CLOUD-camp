import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStep2Type } from '../../types/steps.types'

const initialState: InitialStep2Type = {
  advantages: [''],
  checkBoxes: [2],
  radioBox: null,
}

const step2Slice = createSlice({
  name: 'step2',
  initialState,
  reducers: {
    changeAdvantages: (state, action: PayloadAction<string[]>) => {
      state.advantages = action.payload
    },
    changeCheckBoxes: (state, action: PayloadAction<number[]>) => {
      state.checkBoxes = action.payload
    },
  },
})

export const { changeAdvantages, changeCheckBoxes } = step2Slice.actions

export default step2Slice.reducer
