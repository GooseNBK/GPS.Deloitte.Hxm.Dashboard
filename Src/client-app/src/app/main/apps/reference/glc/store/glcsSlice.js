import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGlcs = createAsyncThunk('getGlcs', async () => {
    const response = await axios.get('/api/Glc');
    const data = await response.data;
    return data;
});

const GlcsSlice = createSlice({
    name: 'glcs',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getGlcs.fulfilled]: (state, action) => action.payload,
    },
});

export default GlcsSlice.reducer;