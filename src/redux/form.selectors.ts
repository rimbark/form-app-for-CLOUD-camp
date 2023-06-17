import { RootState } from 'redux/store'

export const selectContacts = (state: RootState) => state.formSlice.contactsData
export const selectUserInformation = (state: RootState) =>
  state.formSlice.userInformationStepData
export const selectAdvantages = (state: RootState) =>
  state.formSlice.advantagesStepData
export const selectAbout = (state: RootState) => state.formSlice.aboutStepData
export const selectStepper = (state: RootState) => state.stepperSlice
