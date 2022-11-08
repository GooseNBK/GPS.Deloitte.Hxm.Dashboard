import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getemployeeStagingHistoricErrorsByEmpStgHistId = createAsyncThunk('getemployeeStagingHistoricErrorsByEmpStgHistId', async (id) => {
    const response = await axios.get(`/api/EmployeeStagingHistoricErrors/${id}`);
    const data = await response.data;
    return data;
});

const employeeStagingHistoricErrorsSlice = createSlice({
    name: 'EmployeeStagingHistoricErrors',
    initialState: [
        {
            id: 1,
            stgEmpHistId: 2,
            sequenceNo: 1,
            message: 'Division by zero occurred.'
        },
        {
            id: 2,
            stgEmpHistId: 2,
            sequenceNo: 2,
            message: 'Invalid columna name Salari.'
        },
        {
            id: 3,
            stgEmpHistId: 2,
            sequenceNo: 3,
            message: 'Conversion failed when converting datetime from binary/varbinary string.' 
        }
      ],
    reducers: {},
    extraReducers: {
        //[getemployeeStagingHistoricErrorsByEmpStgHistId.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeStagingHistoricErrorsSlice.reducer;