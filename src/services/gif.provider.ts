import { API_HOST, API_KEY } from '../common/environments';
import { Provider } from './http.provider';

export class GifProvider extends  Provider {
    constructor(){
        super({});
    }

    public load(category?: string) {
        return this.get(`${API_HOST}/search/?api_key=${API_KEY}&q=${category || 'hamburgers'}`);
    }

    public saveSearch(text: string) {
        return this.post(`${process.env.REACT_APP_BACK_API}/`, { text });
    }

    public getSearchHistory() {
        return this.get(`${process.env.REACT_APP_BACK_API}/`);
    }
   
    public clearHistory() {
        return this.delete(`${process.env.REACT_APP_BACK_API}/`);
    }
}

export default new GifProvider();