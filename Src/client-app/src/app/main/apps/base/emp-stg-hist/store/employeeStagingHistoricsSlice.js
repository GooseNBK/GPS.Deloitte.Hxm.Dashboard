import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeStagingHistorics = createAsyncThunk('getEmployeeStagingHistorics', async () => {
    const response = await axios.get('/api/StagingEmployeesHistoric');
    const data = await response.data;
    return data;
});

const employeeStagingHistoricsSlice = createSlice({
    name: 'employeeStagingHistorics',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getEmployeeStagingHistorics.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeStagingHistoricsSlice.reducer;