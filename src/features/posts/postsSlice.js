import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addedPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, usersId) {
        return {
          payload: {
            id: nanoid(),
            user: usersId,
            title,
            content,
          },
        }
      },
    },
    updatedPost: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { addedPost, updatedPost } = postsSlice.actions
export default postsSlice.reducer
