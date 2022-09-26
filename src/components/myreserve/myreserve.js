import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDetailsLink } from '../../redux/details/details';
import { getMyReservations } from '../../redux/reservations/reservetions';
import avaterImg from '../../icons/bike-icon.png';

function ReservePage() {
  const userData = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyReservations(userData.user.id, userData.token));
  }, []);

  const myReservations = useSelector((state) => state.getReservationsReducer);

  console.log('My reservations', myReservations);

  return (
    <h1>My Reservation Page</h1>
  );
}

export default ReservePage;
