import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  
  const currentDetailsLink = localStorage.getItem("detailsLink");
 
  return (
    <>
      <Navbar />   
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={currentDetailsLink} element={<Details />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="MyReservation" element={<Reservation />} />
          <Route path="AddItem" element={<AddItem />} />
          <Route path="RemoveItem" element={<RemoveItem />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user" element={<UserAccount />} />
        </Routes>
    </>
  );
}

export default App;
