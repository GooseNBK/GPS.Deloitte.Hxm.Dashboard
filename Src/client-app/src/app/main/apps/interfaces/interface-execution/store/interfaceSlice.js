import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaceById = createAsyncThunk('getInterfaceById', async (id) => {
    const response = await axios.get(`/api/InterfaceSetups/${id}`);
    const data = await response.data;
    console.log(data);
    return data;
});

const interfaceSlice = createSlice({
    name: 'interface',
    initialState: {},
    reducers: {},
    extraReducers: {
        [getInterfaceById.fulfilled]: (state, action) => action.payload,
    },
});

// export const setInterfaces = ({ interfaces }) => interfaces.interfaces;
// export const selectedInterface = ({ interfaces }) => interfaces.interfaces[0];

export default interfaceSlice.reducer;