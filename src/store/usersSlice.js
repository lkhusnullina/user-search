import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users;
    },
  },
});

export const usersReducer = usersSlice.reducer
export const { setUsers } = usersSlice.actions;