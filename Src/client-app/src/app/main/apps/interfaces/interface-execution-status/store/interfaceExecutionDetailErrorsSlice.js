import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaceExecutionDetailErrorsByEmpStgHistId = createAsyncThunk('getInterfaceExecutionDetailErrorsByEmpStgHistId', async (id) => {
    const response = await axios.get(`/api/InterfaceExecutionDetailErrors/${id}`);
    const data = await response.data;
    return data;
});

const interfaceExecutionDetailErrorsSlice = createSlice({
    name: 'interfaceExecutionDetailErrors',
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
        //[getInterfaceExecutionDetailErrorsByEmpStgHistId.fulfilled]: (state, action) => action.payload,
    },
});

export default interfaceExecutionDetailErrorsSlice.reducer;