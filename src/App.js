import React from 'react';
import Users from './components/users';
import { ToastProvider } from 'react-toast-notifications';

function App() {

  return (
    <ToastProvider>
      <Users />
    </ToastProvider>
  );
}

export default App;
