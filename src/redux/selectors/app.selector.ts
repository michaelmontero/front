import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const appState = (state: AppState) => state.app;

const isInitialize = createSelector(appState, state => state.isInitialize);
const isLoading = createSelector(appState, state => state.isLoading);
const searchHistory = createSelector(appState, state => state.searchHistory);
const gifs = createSelector(appState, state => state.gifs?.data);

export const appSelector = {
    isInitialize,
    isLoading,
    gifs,
    searchHistory
}