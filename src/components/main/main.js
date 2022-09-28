import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMotorcycles } from '../../redux/main/motorcycles';
import { setDetailsLink } from '../../redux/details/details';
import { setNavVisible } from '../../redux/navbar/navbar';
import avaterImg from '../../icons/bike-icon.png';
import './main.css';

function MainPage() {
  const ref = useRef(null);
  const token = useSelector((state) => state.authenticationReducer.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles(token));
    dispatch(setNavVisible(true));
  }, []);

  const motorCycles = useSelector((state) => state.motorcyclesReducer);

  const checkUpLimit = () => {
    if (motorCycles.length <= 3) {
      return motorCycles.length;
    }
    return 3;
  };

  const [uplimit, setUpLimit] = useState(checkUpLimit);
  const [classBtnDown, setClassBtnDown] = useState('colorGray');
  const [classBtnUp, setClassBtnUp] = useState(motorCycles.length > 3 ? 'colorGreen' : 'colorGray');

  const changeDownlimit = () => {
    if ((uplimit - 4) >= 0) {
      setUpLimit(uplimit - 4);
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGreen');
    } else {
      setUpLimit(0);
      setClassBtnDown('colorGray');
      setClassBtnUp('colorGreen');
    }

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeUplimit = () => {
    if ((uplimit + 3) > motorCycles.length) {
      setUpLimit(motorCycles.length);
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGray');
    } else {
      setUpLimit(uplimit + 3);
      setClassBtnDown('colorGreen');
      setClassBtnUp('colorGreen');
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="main-page-container main-container">
      { motorCycles.length > 0
        ? motorCycles.map((bike, key) => (
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
              ref={key === uplimit ? ref : null}
            >
              <div>
                <div className="bike-image-wrap">
                  <img src={bike.image_url ? bike.image_url : avaterImg} alt="" className="bike-image" />
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
