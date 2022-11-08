import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSuccessFactors = createAsyncThunk('getSuccessFactors', async () => {
    const response = await axios.get('/api/SuccessFactors');
    const data = await response.data;
    return data;
});

const successFactorsSlice = createSlice({
    name: 'successFactors',
    initialState: [],
    reducers: {},
    extraReducers: {
        //[getSuccessFactors.fulfilled]: (state, action) => action.payload,
    },
});

export default successFactorsSlice.reducer;