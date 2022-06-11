import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './context/UserProvider';
import Router from './routes/index.routes';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
