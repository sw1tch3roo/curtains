import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  // если рут элемент существует, только тогда рендерим приложение
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
