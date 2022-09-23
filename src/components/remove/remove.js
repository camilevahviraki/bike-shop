import {useDispatch, useSelector} from 'react-redux';
import { removeMotorcycle } from '../../redux/main/motorcycles';

function RemoveItem() {
  const motorcycles = useSelector(state => state.motorcyclesReducer);
  const userToken = useSelector(state => state.authenticationReducer);
  const myMotorcycles = motorcycles.filter(bike => bike.user_id !== userToken.user.id);
  const dispatch = useDispatch();
  const remove = (id) => {
     dispatch(removeMotorcycle(id, userToken.token));
  }

  console.log(useSelector(state => state.motorcyclesReducer))
  return (
    <div className="reserve-form">
      <h2>My motorcycles</h2>
      {
        myMotorcycles ? (
          <>{
            myMotorcycles.map((bike, key)=> {
              return (
                <div className="reserve-bike-wrap">
                      <div className="div-div">
                        <img src={bike.image} alt="" className="image-radio-bike"/>
                        <h5 className='Title-reserve'>{bike.brand} {bike.model}</h5>
                        <p>${bike.booking_fee}</p>
                        <p className="year-reserve">Year: {bike.year}</p>
                      </div>  
                    <button
                      type="button"
                      className="reserve-reserve-button"
                      onClick={() => remove(bike.id)}
                    >
                      Remove
                    </button>
                </div>
    
              )
            })
          }</>
        ): (<h2>...loading</h2>)
      }
    </div>
  );
}

export default RemoveItem;
