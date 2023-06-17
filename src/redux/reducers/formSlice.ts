import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AboutDataType,
  AdvantagesDataType,
  ContactsDataType,
  InitialDataType,
  UserInformationDataType,
} from 'types/steps.types'

const initialState: InitialDataType = {
  contactsData: {
    phone: '',
    email: '',
  },
  userInformationStepData: {
    nickname: '',
    name: '',
    sername: '',
    sex: null,
  },
  advantagesStepData: {
    advantages: [''],
    checkBoxes: [],
    radio: null,
  },
  aboutStepData: {
    about: '',
  },
}

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addContactsData: (state, { payload }: PayloadAction<ContactsDataType>) => {
      state.contactsData = payload
    },
    addUserInformationData: (
      state,
      { payload }: PayloadAction<UserInformationDataType>
    ) => {
      state.userInformationStepData = payload
    },
    addAdvantagesData: (
      state,
      { payload }: PayloadAction<AdvantagesDataType>
    ) => {
      state.advantagesStepData = payload
    },
    addAboutData: (state, { payload }: PayloadAction<AboutDataType>) => {
      state.aboutStepData = payload
    },
  },
})

export const {
  addContactsData,
  addUserInformationData,
  addAdvantagesData,
  addAboutData,
} = formSlice.actions
