import {createSlice} from '@reduxjs/toolkit';

export const repoListSlice = createSlice({
  name: 'repoList',
  initialState: {
    loading: false,
    error: false,
    errorMsg: '',
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMsg = '';
      state.data = action.payload;
    },
    setLoading: state => {
      state.loading = true;
      state.error = false;
      state.errorMsg = '';
      state.data = [];
    },
    setError: state => {
      state.loading = false;
      state.error = true;
      state.errorMsg = 'Error loading repositories';
      state.data = [];
    },
  },
});

export const {setData, setLoading, setError} = repoListSlice.actions;

export default repoListSlice.reducer;
