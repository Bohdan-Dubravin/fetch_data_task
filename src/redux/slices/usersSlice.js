import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/config'

export const getUsers = createAsyncThunk('/users', async (userId, thunkAPI) => {
  const response = await api.get('/users')
  return response.data
})

const initialState = {
  users: [],
  status: '',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.status = ''
    })
    builder.addCase(getUsers.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.status = 'error'
    })
  },
})

export const {} = usersSlice.actions

export default usersSlice.reducer
