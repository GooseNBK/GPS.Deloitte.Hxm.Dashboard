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
            StgEmpHistId: 1,
            SequenceNo: 1,
            Message: 'Division by zero occurred.'
        },
        {
            id: 2,
            StgEmpHistId: 1,
            SequenceNo: 2,
            Message: 'Invalid columna name Salari.'
        },
        {
            id: 3,
            StgEmpHistId: 1,
            SequenceNo: 3,
            Message: 'Conversion failed when converting datetime from binary/varbinary string.' 
        }
      ],
    reducers: {},
    extraReducers: {
        //[getInterfaceExecutionDetailErrorsByEmpStgHistId.fulfilled]: (state, action) => action.payload,
    },
});

export default interfaceExecutionDetailErrorsSlice.reducer;