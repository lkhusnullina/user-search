import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalCount: 0,
    selectedUser: null,
  },
  reducers: {
    setUsers(state, action) {
      state.totalCount = action.payload.users.total_count;
      state.users = action.payload.users.items;
    },
    selectUser(state, action){
      state.selectedUser = action.payload.user;
    },
    deselectUser(state, action){
      state.selectedUser = null;
    }
  },
});

export const usersReducer = usersSlice.reducer
export const { setUsers, selectUser, deselectUser } = usersSlice.actions;