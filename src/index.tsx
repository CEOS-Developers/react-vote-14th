import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { LoadingProvider } from './contexts/LoadingContext';
import GlobalStyle from './assets/styles/global-styles';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import FontStyle from './assets/styles/font-styles';

ReactDOM.render(
  <LoadingProvider>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <FontStyle />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
