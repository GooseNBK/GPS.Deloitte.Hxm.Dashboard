import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanyById = createAsyncThunk('getCompanyById', async (id) => {
    const response = await axios.get(`/api/Company/${id}`);
    const data = await response.data;
    return data;
});

const companySlice = createSlice({
    name: 'mapInfo',
    initialState: {},
    reducers: {},
    extraReducers: {
        //[getCompanyById.fulfilled]: (state, action) => action.payload,
    },
});

export default companySlice.reducer;