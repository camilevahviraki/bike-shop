import { useSelector, useDispatch } from 'react-redux';
import avatarBike from '../../icons/bike-icon.png';

const ReservePage = () => {
  const myReservations = useSelector((state) => state.getReservationsReducer);

  return (
    <div className="reservations">
      <h1>My Reservations</h1>

      <div
        className="reservation-container-main"
      >
        <div className="reservation-container top-line">
          <p className="reservation-image">
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
              key={bike.reservation_id}
            >
              <div className="reservation-container">
                <div className="reservation-image-wrap">
                  <img src={bike.image_url ? bike.image_url : avatarBike} alt="" className="reservation-image" />
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
};

export default ReservePage;
