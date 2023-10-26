import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const appState = (state: AppState) => state.app;

const isInitialize = createSelector(appState, state => state.isInitialize);

export const appSelector = {
    isInitialize
}