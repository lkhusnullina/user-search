import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalCount: 0,
    selectedUser: null,
    gitHubUsersPerPage: 30,
    page: 1,
    maxPage: 1,
  },
  reducers: {
    setUsers(state, action) {
      state.totalCount = action.payload.users.total_count;
      state.users = action.payload.users.items;
      state.maxPage = Math.ceil(state.totalCount / state.gitHubUsersPerPage);
    },
    selectUser(state, action){
      state.selectedUser = action.payload.user;
    },
    deselectUser(state, action){
      state.selectedUser = null;
    },
    setNextPage(state, action) {
      console.log(`max page ${state.maxPage} current page ${state.page} next page ${state.page +1}`);
      state.page = state.maxPage < state.page + 1 ? state.maxPage : state.page + 1;
    },
    setPrevPage(state, action) {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    resetPage(state) {
      state.page = 1;
    }
  },
});

export const usersReducer = usersSlice.reducer
export const { setUsers, selectUser, deselectUser, setNextPage, setPrevPage, resetPage } = usersSlice.actions;