import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorcycles } from '../../redux/main/motorcycles';
import ReserveItem from './reserveForm';
import avaterImg from '../../icons/bike-icon.png';
import './reserve.css';

function ReserveForm() {
  const token = useSelector((state) => state.authenticationReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotorcycles(token));
  }, []);
  const sampleResponse = useSelector((state) => state.motorcyclesReducer);
  const [reservedBike, setReservedBike] = useState({});
  const [showForm, setShowForm] = useState(false);

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="reserve-form">
      {
        sampleResponse ? (
          <>
            {
            sampleResponse.map((bike, key) => (
              <div className="reserve-bike-wrap">
                <div className="div-div">
                  <img src={bike.image ? bike.image : avaterImg} alt="" className="image-radio-bike" />
                  <h5 className="Title-reserve">
                    {bike.brand}
                    {' '}
                    {bike.model}
                  </h5>
                  <p>
                    $
                    {bike.booking_fee}
                  </p>
                  <p className="year-reserve">
                    Year:
                    {bike.year}
                  </p>
                </div>
                <span className={bike.reserved ? 'reserved-span' : 'reserved-span hidden'}>Reserved</span>
                <button
                  type="button"
                  className="reserve-reserve-button"
                  onClick={() => { setReservedBike(bike), setShowForm(!showForm); }}
                >
                  Reserve
                </button>
              </div>

            ))
          }
          </>
        )
          : (<h2>...loading</h2>)
      }
      {showForm ? (<ReserveItem bike={reservedBike} hideForm={hideForm} />) : (<></>)}
    </div>
  );
}

export default ReserveForm;
