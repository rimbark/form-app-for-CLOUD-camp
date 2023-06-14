import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsSlice'
import step1Reducer from './reducers/step1Slice'
import stepperReducer from './reducers/stepperSlice'

export const rootReducer = combineReducers({
  contactsReducer,
  stepperReducer,
  step1Reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
