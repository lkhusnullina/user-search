import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalCount: 0,
  },
  reducers: {
    setUsers(state, action) {
      state.totalCount = action.payload.users.total_count;
      state.users = action.payload.users.items;
    },
  },
});

export const usersReducer = usersSlice.reducer
export const { setUsers } = usersSlice.actions;