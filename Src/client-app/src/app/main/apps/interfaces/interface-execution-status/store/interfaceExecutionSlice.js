import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaceExecutionById = createAsyncThunk('getInterfaceExecutionById', async (id) => {
    const response = await axios.get(`/api/InterfaceExecutions/${id}`);
    const data = await response.data;
    return data;
});

const interfaceExecutionSlice = createSlice({
    name: 'interfaceExecution',
    initialState: { id: 3, interface: 'SF OnDemand', status: 'Completed With Errors', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
    reducers: {},
    extraReducers: {
        //[getInterfaceExecutionById.fulfilled]: (state, action) => action.payload,
    },
});

export default interfaceExecutionSlice.reducer;