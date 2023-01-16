import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorcycles } from '../../redux/main/motorcycles';
import avaterImg from '../../icons/bike-icon.png';

const ReserveForm = () => {
  const token = useSelector((state) => state.authenticationReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotorcycles(token));
  }, []);
  const sampleResponse = useSelector((state) => state.motorcyclesReducer);
  const [reservedBike, setReservedBike] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showReserve, setShowReserve] = useState(null);

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="reserve-form">
      <h2>Reserve a motorcycle</h2>
      {
        sampleResponse.length > 0 ? (
          <>
            {
            sampleResponse.map((bike, key) => (
              <div
                className="reserve-bike-wrap"
                onMouseOver={() => setShowReserve(key)}
                onMouseLeave={() => setShowReserve(null)}
                key={bike.id}
              >
                <div className="div-div">
                  <div className="reserve-bike-img-wrap">
                    <img src={bike.image_url ? bike.image_url : avaterImg} alt="" className="image-radio-bike" />
                  </div>
                  <h5 className="Title-reserve">
                    {bike.brand}
                    {' '}
                    {bike.model}
                  </h5>
                  <p className="booking-fee-reserve">
                    $
                    {bike.booking_fee}
                  </p>
                  <p className="year-reserve">
                    Year:
                    {bike.year}
                  </p>
                </div>
                <span className={bike.reserved ? 'reserved-span' : 'reserved-span hidden'}>Reserved</span>
                {
                  showReserve === key ? (
                    <button
                      type="button"
                      className="reserve-reserve-button"
                      onClick={() => { setReservedBike(bike); setShowForm(!showForm); }}
                    >
                      Reserve
                    </button>
                  ) : (<></>)
                }
              </div>

            ))
          }
          </>
        )
          : (<h2>...loading</h2>)
      }

    </div>
  );
};

export default ReserveForm;
