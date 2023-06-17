import {
  type Action,
  combineReducers,
  configureStore,
  type ThunkAction,
} from '@reduxjs/toolkit'
import { formSlice } from './reducers/formSlice'
import { stepperSlice } from './reducers/stepperSlice'

export const rootReducer = combineReducers({
  formSlice: formSlice.reducer,
  stepperSlice: stepperSlice.reducer,
})
export const store = configureStore({ reducer: rootReducer })
export type AppState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
