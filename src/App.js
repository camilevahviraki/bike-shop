import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Reserve from './pages/reserve';
import Reservation from './pages/myreserve';
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
        </Routes>
      </main>
    </>
  );
}

export default App;
