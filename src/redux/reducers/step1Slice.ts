import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialStep1Type } from '../../types/steps.types'

const initialState: initialStep1Type = {
  nickname: '',
  name: '',
  sername: '',
  sex: null,
}

const step1Slice = createSlice({
  name: 'step1',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<initialStep1Type>) => {
      state.nickname = action.payload.nickname
      state.name = action.payload.name
      state.sername = action.payload.sername
      state.sex = action.payload.sex
    },
  },
})

export const { addData } = step1Slice.actions
export default step1Slice.reducer
