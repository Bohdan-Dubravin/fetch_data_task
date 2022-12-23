import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/config'

export const getPosts = createAsyncThunk(
  '/posts',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get('/posts', { params: { userId } })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const initialState = {
  posts: [],
  status: '',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.status = ''
    })
    builder.addCase(getPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.status = 'error'
    })
  },
})

export const {} = postsSlice.actions

export default postsSlice.reducer
