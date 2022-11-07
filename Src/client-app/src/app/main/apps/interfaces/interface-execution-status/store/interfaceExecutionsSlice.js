import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaceExecutions = createAsyncThunk('getInterfaceExecutions', async () => {
    const response = await axios.get('/api/InterfaceExecutions');
    const data = await response.data;
    return data;
});

const interfaceExecutionsSlice = createSlice({
    name: 'interfaceExecutions',
    initialState: [
        { id: 1, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 2, interface: 'SF OnDemand', status: 'Pending', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 3, interface: 'SF OnDemand', status: 'Completed With Errors', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 4, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 5, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 6, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 7, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 8, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 9, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 10, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 11, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 12, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 13, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 14, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 15, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 16, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 17, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 18, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 19, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 20, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 21, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 22, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 23, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 24, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 25, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 26, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 27, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
      ],
    reducers: {},
    extraReducers: {
        //[getInterfaceExecutions.fulfilled]: (state, action) => action.payload,
    },
});

export default interfaceExecutionsSlice.reducer;