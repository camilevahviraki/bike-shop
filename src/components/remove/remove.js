import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMotorcycle, fetchMotorcycles } from '../../redux/main/motorcycles';
import avatarBike from '../../icons/bike-icon.png';

function RemoveItem() {
  const motorcycles = useSelector((state) => state.motorcyclesReducer);
  const userToken = useSelector((state) => state.authenticationReducer);
  const myMotorcycles = motorcycles.filter((bike) => bike.user_id === userToken.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotorcycles(userToken.token));
  }, []);
  const remove = (id) => {
    dispatch(removeMotorcycle(id, userToken.token));
  };

  const [showDelete, setShowDelete] = useState(null);

  return (
    <div className="reserve-form">
      <h2>My motorcycles</h2>
      {
        myMotorcycles ? (
          <>
            {
            myMotorcycles.map((bike, key) => (
              <div className="reserve-bike-wrap" onMouseOver={() => setShowDelete(key)} onMouseLeave={() => setShowDelete(null)}>
                <div className="div-div">
                  <img src={bike.image_url ? bike.image_url : avatarBike} alt="" className="image-radio-bike" />
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
               {
                showDelete === key ? (
                  <button
                  type="button"
                  className="reserve-reserve-button"
                  onClick={() => remove(bike.id)}
                >
                  Delete
                </button>
                ):(<></>)
               }
              </div>

            ))
          }
          </>
        ) : (<h2>...loading</h2>)
      }
    </div>
  );
}

export default RemoveItem;
