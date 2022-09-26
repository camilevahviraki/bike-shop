import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMotorcycles } from '../../redux/main/motorcycles';
import { setDetailsLink } from '../../redux/details/details';
import avaterImg from '../../icons/bike-icon.png';
import './main.css';

function MainPage() {
  const token = useSelector((state) => state.authenticationReducer.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles(token));
  }, []);

  const motorCycles = useSelector((state) => state.motorcyclesReducer);

  const checkUpLimit = (props) => {
    if (motorCycles.length <= 3) {
      return motorCycles.length;
    }
    return 3;
  };

  const [downlinit, setDownLimit] = useState(0);
  const [uplimit, setUpLimit] = useState(checkUpLimit);
  const [classBtnDown, setClassBtnDown] = useState('colorGray');
  const [classBtnUp, setClassBtnUp] = useState(motorCycles.length > 3 ? 'colorGreen' : 'colorGray');

  const changeDownlimit = () => {
    if ((downlinit - 3) <= 0) {
      setDownLimit(0);
      setUpLimit(3);
      setClassBtnDown('colorGray');
      setClassBtnUp('colorGreen');
    } else {
      setDownLimit(downlinit - 3);
      setUpLimit(uplimit - 3);
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGreen');
    }
  };

  const changeUplimit = () => {
    if (!((downlinit + 3) > motorCycles.length)) {
      setDownLimit(downlinit + 3);
      setUpLimit(uplimit + 3);
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGreen');
    } else {
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGray');
    }
  };

  return (
    <section className="main-page-container main-container">
      { motorCycles
        ? motorCycles.slice(downlinit, uplimit).map((bike, key) => (
          <Link
            to={`${bike.brand}-${bike.model}`.split(' ').join('-')}
            onClick={() => {
              dispatch(setDetailsLink(`${bike.brand}-${bike.model}`.split(' ').join('-')));
              localStorage.setItem('detailsLink', `${bike.brand}-${bike.model}`.split(' ').join('-'));
              localStorage.setItem('detailsID', bike.id);
            }}
          >
            <div
              className="motorcycle_wrap"
            >
              <div>
                <div className="bike-image-wrap">
                  <img src={bike.image ? bike.image : avaterImg} alt="" className="bike-image" />
                </div>
              </div>
              <h3>
                {bike.brand}
                {' '}
                {bike.model}
              </h3>
              <p className="bike-description">{bike.description}</p>
            </div>
          </Link>
        )) : (<h2>There is no motorcycle yet! You can add a brand new </h2>)}
      <div className="next-previous-wrap">
        <button
          type="button"
          className={`prev-next-btn previous-page ${classBtnDown}`}
          onClick={changeDownlimit}
        >
          {'<'}
        </button>
        <button
          type="button"
          className={`prev-next-btn next-page ${classBtnUp}`}
          onClick={changeUplimit}
        >
          {'>'}
        </button>
      </div>
    </section>
  );
}

export default MainPage;
