import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formSlice } from './reducers/formSlice'
import { stepperSlice } from './reducers/stepperSlice'

export const rootReducer = combineReducers({
  formSlice: formSlice.reducer,
  stepperSlice: stepperSlice.reducer,
})
export const store = configureStore({ reducer: rootReducer })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
