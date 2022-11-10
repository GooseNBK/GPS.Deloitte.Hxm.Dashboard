import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMapInfoById = createAsyncThunk('getMapInfoById', async (id) => {
    const response = await axios.get(`/api/MapInfo/${id}`);
    const data = await response.data;
    return data;
});

const mapInfoSlice = createSlice({
    name: 'mapInfo',
    initialState: {},
    reducers: {},
    extraReducers: {
        //[getMapInfoById.fulfilled]: (state, action) => action.payload,
    },
});

export default mapInfoSlice.reducer;