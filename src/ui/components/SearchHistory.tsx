import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/selectors/app.selector';
import { useCallback, useEffect } from 'react';
import { clearHistory, getSearchHistory } from '../../redux/actions/gif.actions';
import { useDispatch } from '../../redux/store';

interface SearchHistoryProps {
    onClick: Function;
}

export const SearchHistory = ({ onClick }: SearchHistoryProps) => {
    const dispatch = useDispatch()
    const history: {id: string, text: string}[] = useSelector(appSelector.searchHistory);
    
    useEffect(() => {
        dispatch(getSearchHistory());
    }, [dispatch])

    const onClearHistory = useCallback(() => { 
        dispatch(clearHistory());
    }, [dispatch])

    if (history?.length === 0) return <h3>Seems like you have not search yet...</h3>

    return  <>
    <input type='button' value={'Clear'} onClick={onClearHistory} />
        <ul>
            {history.map(({id, text}: any) => {
                return <li key={id} onClick={() => onClick(text)}>{text}</li>
            })}
        </ul>
    </>
}