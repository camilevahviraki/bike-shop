import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './components/main/main';
import Reserve from './components/reserve/reserve';
import Reservation from './pages/myreserve';
import AddItem from './components/add/add';
import RemoveItem from './components/remove/remove';
import Navbar from './components/navbar';
import Login from './components/authentication/login';
import Details from './components/details/detail';
import Signup from './components/authentication/signup';
import UserAccount from './components/userAccount/userAccount';
import SplashScreen from './components/splashScreen/splashScreen';

function App() {
  let detailsLink = '';
  const storedLink = localStorage.getItem('detailsLink');
  const currentDetailsLink = useSelector((state) => state.currentLinkReducer);
  if (currentDetailsLink === 'details') {
    detailsLink = storedLink;
  } else {
    detailsLink = currentDetailsLink;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="main" element={<Main />} />
        <Route path={`main/${detailsLink}`} element={<Details />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="MyReservation" element={<Reservation />} />
        <Route path="AddItem" element={<AddItem />} />
        <Route path="RemoveItem" element={<RemoveItem />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Main />} />
        <Route path="user" element={<UserAccount />} />
      </Routes>
    </>
  );
}

export default App;
