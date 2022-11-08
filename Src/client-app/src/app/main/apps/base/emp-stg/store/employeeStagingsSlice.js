import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeStagings = createAsyncThunk('getSuccessFactors', async () => {
    const response = await axios.get('/api/StagingEmployees');
    const data = await response.data;
    return data;
});

const employeeStagingsSlice = createSlice({
    name: 'employeeStagings',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getEmployeeStagings.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeStagingsSlice.reducer;