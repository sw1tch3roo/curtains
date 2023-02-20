import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  // если рут элемент существует, только тогда рендерим приложение
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    // подключаем глобальное хранилище ко всему приложению при помощи redux toolkit store
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
