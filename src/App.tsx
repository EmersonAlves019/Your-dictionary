import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserProvider from './context/UserProvider';
import YourDictionaryProvider from './context/YourDictionaryContext';
import Router from './routes/index.routes';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <UserProvider>
      <YourDictionaryProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
          <ToastContainer limit={2} autoClose={1500} />
        </BrowserRouter>
      </YourDictionaryProvider>
    </UserProvider>
  );
};

export default App;
