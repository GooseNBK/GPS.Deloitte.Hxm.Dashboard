import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaces = createAsyncThunk('interfaceExecution/list/getInterfaces', async () => {
    const response = await axios.get('/api/InterfaceSetups');

    const data = await response.data;

    return data;
});

  const interfaceSlice = createSlice({
    name: 'interfaceExecution/list',
    initialState: null,
    reducers: {},
    extraReducers: {
      [getInterfaces.fulfilled]: (state, action) => action.payload,
    },
  });

export const selectInterfaces = ({ interfaceExecution }) => interfaceExecution;

export default interfaceSlice.reducer;