import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMapInfos = createAsyncThunk('getMapInfos', async () => {
    const response = await axios.get('/api/MapInfo');
    const data = await response.data;
    return data;
});

const mapInfosSlice = createSlice({
    name: 'mapInfos',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getMapInfos.fulfilled]: (state, action) => action.payload,
    },
});

export default mapInfosSlice.reducer;