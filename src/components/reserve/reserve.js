import {useDispatch, useSelector} from 'react-redux';
import sampleData from '../main/sampleRespone.json';
import { reserveMotorcycle } from '../../redux/main/motorcycles';
import './reserve.css';

function ReserveForm() {
  const sampleResponse = useSelector(state => state.motorcyclesReducer)
  const dispatch = useDispatch();
  const reserve = (id) => {
     dispatch(reserveMotorcycle(id));
  }

  // console.log(useSelector(state => state.reserveReducer))
  return (
    <div className="reserve-form">
      {
        sampleResponse ? (
          <>
          {
                    sampleResponse.map((bike, key)=> {
                      return (
                        <div className="reserve-bike-wrap">
                              <div className="div-div">
                                <img src={bike.image} alt="" className="image-radio-bike"/>
                                <h5 className='Title-reserve'>{bike.brand} {bike.model}</h5>
                                <p>${bike.booking_fee}</p>
                                <p className="year-reserve">Year: {bike.year}</p>
                              </div>  
                            <span className={bike.reserved ? "reserved-span":"reserved-span hidden"}>Reserved</span>
                            <button
                              type="button"
                              className="reserve-reserve-button"
                              onClick={() => reserve(bike.id)}
                            >
                              Reserve
                            </button>
                        </div>
            
                      )
                    })
          }
          </>
        ):
        (<h2>...loading</h2>)
      }
    </div>
  );
}

export default ReserveForm;
