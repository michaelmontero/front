import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app.reducer'

export const rootReducer = combineReducers({
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export type AppState = ReturnType<typeof rootReducer>;