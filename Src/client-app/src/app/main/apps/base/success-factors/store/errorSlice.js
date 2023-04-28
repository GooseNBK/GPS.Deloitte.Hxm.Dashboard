import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSuccessFactorsErrors = createAsyncThunk('getSuccessFactorsErrors', async () => {
    const response = await axios.get('/api/SuccessFactorsErrors');
    const data = await response.data;
    return data;
});

const successFactorsErrorsSlice = createSlice({
    name: 'successFactorsErrors',
    initialState: [
        {
            globalEmployeeId: '5003078',
            date: '04/15/2023',
            processExecution: '1',
            error: 'Cost Center Error',
            step: 'Validation',
            status: 'Auto Fixed'
        },
        {
            globalEmployeeId: '5003078',
            date: '04/15/2023',
            processExecution: '2',
            error: 'Cost Center Error',
            step: 'Validation',
            status: 'Auto Fixed'
        }
    ],
    reducers: {},
    extraReducers: {
        //[getSuccessFactors.fulfilled]: (state, action) => action.payload,
    },
});

export default successFactorsErrorsSlice.reducer;