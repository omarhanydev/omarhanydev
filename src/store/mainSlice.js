import { createSlice } from '@reduxjs/toolkit';
import data from './data';

const initialState = data;

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        
    }
});

export const {  } = mainSlice.actions;

export default mainSlice.reducer;

