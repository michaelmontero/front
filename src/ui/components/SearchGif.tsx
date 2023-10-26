import { useCallback, useState } from 'react';
import { useDispatch } from '../../redux/store';
import { saveSearchHistory } from '../../redux/actions/gif.actions';

interface SearchGifProps {
    onSearch: Function;
}

export const SearchGif = ({ onSearch }: SearchGifProps) => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleChange = useCallback(({target}: any) => {
        const { value } = target;
        setText(value); 
    }, [])
   
    const handleSearch = useCallback(() => {
        onSearch(text);
        dispatch(saveSearchHistory(text))
        setText(''); 
    }, [onSearch, text, dispatch])

    return  <>
        <input type='text' value={text} onInput={handleChange} />
        <input type='button' onClick={handleSearch} value={'Search'}/>
    </>
}