import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/selectors/app.selector';
import { useEffect } from 'react';
import { getSearchHistory } from '../../redux/actions/gif.actions';
import { useDispatch } from '../../redux/store';

interface SearchHistoryProps {
    onClick: Function;
}

export const SearchHistory = ({ onClick }: SearchHistoryProps) => {
    const dispatch = useDispatch()
    const history: string[] = useSelector(appSelector.searchHistory);
    
    useEffect(() => {
        dispatch(getSearchHistory());
    }, [dispatch])

    return  <>
        <ul>
            {history.map(({id, text}: any) => {
                return <li key={id} onClick={() => onClick(text)}>{text}</li>
            })}
        </ul>
    </>
}