import { addSearchHistory, setGifs, setLoading, setSearchHistory } from '../reducers/app.reducer';
import GifProvider from './../../services/gif.provider';

export const get = (category?: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(setLoading(false));
            const data = await GifProvider.load(category);
            dispatch(setGifs(data as any));
        } catch {
            console.log('Show error')
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const getSearchHistory = () => {
    return async (dispatch: any) => {
        try {
            dispatch(setLoading(false));
            const data = await GifProvider.getSearchHistory();
            dispatch(setSearchHistory(data as string[]));
        } catch {
            console.log('Show error')
        } finally {
            dispatch(setLoading(false))
        }
    }
}

export const saveSearchHistory = (text: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(setLoading(false));
            const data = await GifProvider.saveSearch(text);
            dispatch(addSearchHistory(data as any));
        } catch {
            console.log('Show error')
        } finally {
            dispatch(setLoading(false))
        }
    }
}