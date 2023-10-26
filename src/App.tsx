import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home } from './ui/components/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
