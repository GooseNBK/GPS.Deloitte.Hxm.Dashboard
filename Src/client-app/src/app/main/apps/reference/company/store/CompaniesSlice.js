import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanies = createAsyncThunk('getCompanies', async () => {
    const response = await axios.get('/api/Companies');
    const data = await response.data;
    return data;
});

const companiesSlice = createSlice({
    name: 'companies',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getCompanies.fulfilled]: (state, action) => action.payload,
    },
});

export default companiesSlice.reducer;