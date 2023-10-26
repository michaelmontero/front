import { useSelector } from 'react-redux';
import { useDispatch } from '../../redux/store';
import { IGif } from '../../types/gif';
import { appSelector } from '../../redux/selectors/app.selector';
import { useCallback, useEffect } from 'react';
import { get } from '../../redux/actions/gif.actions';
import { GifItem } from './GifItem';
import { Grid } from '@mui/material'; 
import { SearchGif } from './SearchGif';
import { SearchHistory } from './SearchHistory';

export const Gifs = () => {
    const dispatch = useDispatch();

    const gifs: IGif[] = useSelector(appSelector.gifs);
   
    const getGifts = useCallback((filter?: string) => {
        dispatch(get(filter)); 
    }, [dispatch])

    useEffect(() => {
        getGifts();
    }, [getGifts])
 

    const handleSearch = useCallback((text: string) => {
        getGifts(text)
    }, [getGifts])

    // if(isLoading) return loading status or skeleton
    // if(!gifs || gifs.length === 0) return null;

    return <>
    <SearchGif onSearch={handleSearch} />
        <Grid container>
            <Grid item xs={10}>
                {gifs && gifs.map((gif: IGif) => (
                    <GifItem key={gif.id} gif={gif} />
                ))}
            </Grid>
            <Grid item xs={2}>
                <SearchHistory onClick={handleSearch} />
            </Grid>
        </Grid>
    </>
}