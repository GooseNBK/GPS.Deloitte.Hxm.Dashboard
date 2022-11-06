import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInterfaces = createAsyncThunk('getInterfaces', async () => {
    const response = await axios.get('/api/InterfaceSetups');
    const data = await response.data;
    return data;
});

const interfacesSlice = createSlice({
    name: 'interfaces',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getInterfaces.fulfilled]: (state, action) => action.payload,
    },
});

export default interfacesSlice.reducer;