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
import SplashScreen from './components/splashScreen/splashScreen';

const AppContainer = () => {
  let isLogedIn = false;
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (!localStorage.getItem('userData')) {
      isLogedIn = false;
    } else if (JSON.parse(savedData).user) {
      isLogedIn = true;
    } else {
      isLogedIn = false;
    }
  }, []);

  const savedToken = localStorage.getItem('userData');

  const loginToken = useSelector((state) => state.authenticationReducer);
  if (!savedToken) {
    isLogedIn = false;
  } else if (loginToken.user || JSON.parse(savedToken).user) {
    localStorage.setItem('userData', JSON.stringify(loginToken));
    isLogedIn = true;
  } else if (loginToken.error) {
    localStorage.setItem('userData', '{}');
    isLogedIn = false;
  } else {
    isLogedIn = false;
  }

  const checkUserStatus = useSelector((state) => state.isLogedInReducer);
  if (checkUserStatus.userLogin === 'logout') {
    localStorage.setItem('userData', '{}');
  }

  return (
    <>
      <BrowserRouter>
        {
          !isLogedIn
            ? (
              <>
                <Routes>
                  <Route path="/" element={<SplashScreen />} />
                  <Route path="main" element={<Login />} />
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
