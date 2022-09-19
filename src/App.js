import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Reserve from './pages/reserve';
import Reservation from './pages/myreserve';
import AddItem from './pages/add';
import RemoveItem from './pages/remove';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="MyReservation" element={<Reservation />} />
          <Route path="AddItem" element={<AddItem />} />
          <Route path="RemoveItem" element={<RemoveItem />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
