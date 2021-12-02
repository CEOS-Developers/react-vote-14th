import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { LoadingProvider } from './contexts/LoadingContext';
import GlobalStyle from './assets/styles/global-styles';
import App from './App';

ReactDOM.render(
  <LoadingProvider>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </LoadingProvider>,
  document.getElementById('root')
);
