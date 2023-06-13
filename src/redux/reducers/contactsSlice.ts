import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactsDataTypes } from '../../types/contactsData.types'

const initialState = {
  phone: '',
  email: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactsData: (state, action: PayloadAction<ContactsDataTypes>) => {
      state.phone = action.payload.phone
      state.email = action.payload.email
    },
  },
})

export const { addContactsData } = contactsSlice.actions
export default contactsSlice.reducer
