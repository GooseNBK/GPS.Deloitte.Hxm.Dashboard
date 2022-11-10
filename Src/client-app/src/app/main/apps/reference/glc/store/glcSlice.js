import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGlcById = createAsyncThunk('getGlcById', async (id) => {
    const response = await axios.get(`/api/Glc/${id}`);
    const data = await response.data;
    return data;
});

const glcSlice = createSlice({
    name: 'glc',
    initialState: {},
    reducers: {},
    extraReducers: {
        //[getGlcById.fulfilled]: (state, action) => action.payload,
    },
});

export default glcSlice.reducer;