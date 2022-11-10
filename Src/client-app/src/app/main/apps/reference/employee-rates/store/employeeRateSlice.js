import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeRateById = createAsyncThunk('getEmployeeRateById', async (id) => {
    const response = await axios.get(`/api/EmployeeRates/${id}`);
    const data = await response.data;
    return data;
});

const employeeRateSlice = createSlice({
    name: 'employeeRate',
    initialState: {},
    reducers: {},
    extraReducers: {
        //[getEmployeeRateById.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeRateSlice.reducer;