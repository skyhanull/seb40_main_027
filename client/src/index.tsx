import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import axios from 'axios';

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'skip';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </RecoilRoot>
);
