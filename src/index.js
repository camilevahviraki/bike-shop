import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import App from './App';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';

const AppContainer = () => {
  let isLogedIn = false;
  let messade = '';
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (!localStorage.getItem('userData')) {
      isLogedIn = false;
      messade = '1';
    } else if (JSON.parse(savedData).user) {
      // setUserData(JSON.parse(localStorage.getItem("userData")));
      isLogedIn = true;
      messade = '2';
    } else {
      isLogedIn = false;
      messade = '3';
    }
  }, []);

  const savedToken = localStorage.getItem('userData');

  const loginToken = useSelector((state) => state.authenticationReducer);
  if (!savedToken) {
    isLogedIn = false;
    messade = '3';
  } else if (loginToken.user || JSON.parse(savedToken).user) {
    localStorage.setItem('userData', JSON.stringify(loginToken));
    isLogedIn = true;
    messade = '4';
  } else if (loginToken.error) {
    localStorage.setItem('userData', '{}');
    isLogedIn = false;
    messade = '5';
  } else {
    isLogedIn = false;
    messade = '6';
  }

  console.log('isLogedIn', isLogedIn, 'message =>', messade);

  return (
    <>
      <BrowserRouter>
        {
          !isLogedIn
            ? (
              <>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="login" element={<Login isLogedIn={isLogedIn} />} />
                  <Route path="signup" element={<Signup isLogedIn={isLogedIn} />} />
                </Routes>
              </>
            )
            : (
              <App />
            )
        }
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
