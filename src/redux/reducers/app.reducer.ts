import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GifData, IGif } from '../../types/gif';

export interface GlobalState {
    isInitialize: boolean;
    isLoading: boolean;
    gifs: GifData;
    searchHistory: string[];
}

const initialState: GlobalState = {
    isInitialize: false,
    isLoading: false,
    gifs: {
        data: [],
        pagination: {
            count: 0,
            offset: 0,
            total_count: 0
        }
    },
    searchHistory: []
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initialize: (state, data: PayloadAction<boolean>) => {
            state.isInitialize = data.payload;
        },
        setLoading: (state, data: PayloadAction<boolean>) => {
            state.isLoading = data.payload;
        },
        setGifs: (state, data: PayloadAction<GifData>) => {
            state.gifs = data.payload;
        },
        setSearchHistory: (state, data: PayloadAction<string[]>) => {
            state.searchHistory = data.payload;
        },
        addSearchHistory: (state, data: PayloadAction<string>) => {
            state.searchHistory.push(data.payload);
        }
    }
})

export const { initialize, setLoading, setGifs, setSearchHistory, addSearchHistory } = appSlice.actions

export default appSlice.reducer