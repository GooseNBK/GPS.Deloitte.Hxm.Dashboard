import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeRates = createAsyncThunk('getEmployeeRates', async () => {
    const response = await axios.get('/api/EmployeeRates');
    const data = await response.data;
    return data;
});

const employeeRatesSlice = createSlice({
    name: 'employeeRates',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getEmployeeRates.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeRatesSlice.reducer;