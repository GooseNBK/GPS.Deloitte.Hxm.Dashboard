import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExchangeRates = createAsyncThunk('getExchangeRates', async () => {
    const response = await axios.get('/api/ExchangeRates');
    const data = await response.data;
    return data;
});

const exchangeRatesSlice = createSlice({
    name: 'exchangeRates',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getExchangeRates.fulfilled]: (state, action) => action.payload,
    },
});

export default exchangeRatesSlice.reducer;