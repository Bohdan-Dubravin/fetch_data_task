import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/config'

export const getAlbums = createAsyncThunk(
  '/albums',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get('/albums', { params: { userId } })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const initialState = {
  albums: [],
  status: '',
}

export const postsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbums.fulfilled, (state, action) => {
      state.albums = action.payload
      console.log(state.albums)
      state.status = ''
    })
    builder.addCase(getAlbums.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(getAlbums.rejected, (state, action) => {
      state.status = action.payload
    })
  },
})

export const {} = postsSlice.actions

export default postsSlice.reducer
