import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './pages/shared/reducer';
import { CookiesProvider } from 'react-cookie';
import App from './App';

const store = createStore(reducer);
// console.log(store.getState());

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);
