import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import vhCheck from 'vh-check';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './app/components/tostify.styled';
import { App, store } from './app';

vhCheck();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <StyledToastContainer pauseOnHover={false} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
