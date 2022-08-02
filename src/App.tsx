import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import cityApi from './api/cityApi';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
