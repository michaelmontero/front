import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app.reducer'
import { useDispatch as useAppDispatch } from 'react-redux';

export const rootReducer = combineReducers({
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
const useDispatch: () => AppDispatch = useAppDispatch;

export type AppState = ReturnType<typeof rootReducer>;

export { useDispatch };