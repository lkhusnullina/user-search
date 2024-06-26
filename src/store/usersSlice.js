import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalCount: -1,
    selectedUser: null,
    gitHubUsersPerPage: 30,
    page: 1,
    maxPage: 1,
    sort: null,
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
      state.page = state.maxPage < state.page + 1 ? state.maxPage : state.page + 1;
    },
    setPrevPage(state, action) {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    setSort(state, action) {
      state.sort = action.payload.sort;
    },
    resetPage(state) {
      state.page = 1;
    },
    clearStore(state) {
      state.users = [];
      state.totalCount = -1;
      state.selectedUser = null;
      state.page = 1;
      state.maxPage = 1;
      state.sort = null;
    }
  },
});

export const usersReducer = usersSlice.reducer
export const { setUsers, selectUser, deselectUser, setNextPage, setPrevPage, setSort, resetPage, clearStore } = usersSlice.actions;