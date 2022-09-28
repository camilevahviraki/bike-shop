import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDetailsLink } from '../../redux/details/details';
import { getMyReservations, cancelReservation } from '../../redux/reservations/reservetions';
import avatarBike from '../../icons/bike-icon.png';
import './myreserve.css';

function ReservePage() {
  const userData = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyReservations(userData.user.id, userData.token));
  }, []);

  const myReservations = useSelector((state) => state.getReservationsReducer);
  const [deleteVisible, setDeleteVisible] = useState(null);

  const showDelete = (id) => {
    setDeleteVisible(id);
  };

  return (
    <div className="reservations">
      <h1>My Reservations</h1>

      <div
        className="reservation-container-main"
        onMouseOver={() => showDelete(bike.reservation_id)}
        onMouseLeave={() => showDelete(null)}
      >
        <div className="reservation-container top-line">
          <p>
            Image
          </p>
          <p className="reservation-brand">
            Brand
          </p>
          <p className="reservation-model">
            Model
          </p>
          <p className="reservation-total-price">
            Total Price
          </p>
          <p className="reservation-year">
            Year
          </p>
          <p className="reservation-startDate">
            Start date
          </p>
          <p className="reservation-endDate">
            End date
          </p>
          <p>
            Cancel
          </p>

        </div>
      </div>

      {
        myReservations
          ? myReservations.map((bike) => (
            <div
              className="reservation-container-main"
              onMouseOver={() => showDelete(bike.reservation_id)}
              onMouseLeave={() => showDelete(null)}
            >
              <div className="reservation-container">
                <div className="reservation-image-wrap">
                  <img src={bike.image ? bike.image : avatarBike} alt="" className="reservation-image" />
                </div>
                <p className="reservation-brand">
                  {bike.brand}
                </p>
                <p className="reservation-model">
                  {bike.model}
                </p>
                <p className="reservation-total-price">
                  $
                  {bike.total_price}
                </p>
                <p className="reservation-year">
                  {bike.year}
                </p>
                <p className="reservation-startDate">
                  {bike.start_date}
                </p>
                <p className="reservation-endDate">
                  {bike.end_date}
                </p>
                <div className="reservation-button-wrap">
                  <button
                    type="button"
                    className="cancel-reservaion"
                    onClick={() => dispatch(cancelReservation(bike.reservation_id, userData.token))}
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>
            </div>
          )) : (<h2>...loading</h2>)
      }

    </div>
  );
}

export default ReservePage;
