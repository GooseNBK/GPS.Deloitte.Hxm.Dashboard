import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExchangeRateById = createAsyncThunk('getExchangeRateById', async (id) => {
    const response = await axios.get(`/api/ExchangeRates/${id}`);
    const data = await response.data;
    return data;
});

const exchangeRateSlice = createSlice({
    name: 'exchangeRate',
    initialState: {},
    reducers: {},
    extraReducers: {
        //[getExchangeRateById.fulfilled]: (state, action) => action.payload,
    },
});

export default exchangeRateSlice.reducer;