import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'redux/store'

export const sendFormDataToServer = createAsyncThunk<RootState, undefined>(
  'sendFormDataToServer',
  async (_, { getState, rejectWithValue }) => {
    const formData = getState() as RootState
    const { formSlice } = formData
    try {
      const response = await axios.post(
        'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
        { formSlice }
      )
      return response.data.status
    } catch {
      return rejectWithValue('Ошибка отправки формы')
    }
  }
)
