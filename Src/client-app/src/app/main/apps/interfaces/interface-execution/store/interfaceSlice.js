import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaces = createAsyncThunk('getInterfaces', async () => {
    const response = await axios.get('/api/InterfaceSetups');
    const data = await response.data;
    return data;
});

const interfaceSlice = createSlice({
    name: 'interfaces',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getInterfaces.fulfilled]: (state, action) => action.payload,
    },
});

export const setInterfaces = ({ interfaces }) => interfaces.interfaces; //view redux devtools
export const selectedInterface = ({ interfaces }) => interfaces.interfaces[0];

export default interfaceSlice.reducer;