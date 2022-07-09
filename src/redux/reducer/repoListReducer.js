import {createSlice} from '@reduxjs/toolkit';

export const repoListSlice = createSlice({
  name: 'repoList',
  initialState: {
    loading: false,
    error: false,
    errorMsg: '',
    data: [],
    page: 0,
    listEnded: false,
  },
  reducers: {
    setData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMsg = '';
      state.data = action.payload.data;
      state.page = action.payload.page;
      state.listEnded = action.payload.listEnded;
    },
    setLoading: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorMsg = '';
      state.page = action.payload.page;
      state.listEnded = false;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = action.payload.errorMsg || 'Error loading repositories';
      state.data = [];
      state.page = 0;
      state.listEnded = false;
    },
  },
});

export const {setData, setLoading, setError} = repoListSlice.actions;

export default repoListSlice.reducer;
