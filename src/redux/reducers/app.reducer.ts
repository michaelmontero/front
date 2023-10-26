import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
    isInitialize: boolean
}

const initialState: GlobalState = {
    isInitialize: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initialize: (state, data: PayloadAction<boolean>) => {
            state.isInitialize = data.payload;
        }
    }
})

export const { initialize } = appSlice.actions

export default appSlice.reducer