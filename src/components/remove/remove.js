import {useDispatch, useSelector} from 'react-redux';
import sampleData from '../main/sampleRespone.json';
import { removeMotorcycle } from '../../redux/main/motorcycles';
// import './reserve.css';

function RemoveItem() {
  const sampleResponse = useSelector(state => state.motorcyclesReducer);
  const dispatch = useDispatch();
  const remove = (id) => {
     dispatch(removeMotorcycle(id));
  }

  console.log(useSelector(state => state.motorcyclesReducer))
  return (
    <div className="reserve-form">
      {
        sampleResponse ? (
          <>{
            sampleResponse.map((bike, key)=> {
              return (
                <div className="reserve-bike-wrap">
                      <div className="div-div">
                        <img src={bike.image.url} alt="" className="image-radio-bike"/>
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
