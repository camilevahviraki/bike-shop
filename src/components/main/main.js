import { useEffect, useState } from "react";
import { fetchMotorcycles } from "../../redux/main/motorcycles";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import sampleRes from './sampleRespone.json';
import './main.css';
 
function MainPage() {
  console.log("fetched =>", useSelector((state) => state.motorcyclesReducer));
   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);

  let sampleResponse = useSelector((state) => state.motorcyclesReducer)

  // if(useSelector((state) => state.motorcyclesReducer).length > 0) {
  //   sampleResponse = useSelector((state) => state.motorcyclesReducer);
  // }
  // useEffect(() => {
    // setResponse(useSelector((state) => state.motorcyclesReducer));
  // }, [useSelector((state) => state.motorcyclesReducer)])
  
  const checkUpLimit = (props) => {
    if(sampleResponse.length <= 3){
      return sampleResponse.length
    }else {
      return 3
    }
  }

  const [downlinit, setDownLimit] = useState(0);
  const [uplimit, setUpLimit] = useState(checkUpLimit);
  const [classBtnDown, setClassBtnDown] = useState("colorGray");
  const [classBtnUp, setClassBtnUp] = useState(sampleResponse.length > 3 ? "colorGreen": "colorGray");

  const changeDownlimit = () => {
    if((downlinit - 3) <= 0) {
      setDownLimit(0);
      setUpLimit(3);
      setClassBtnDown("colorGray");
      setClassBtnUp("colorGreen");
    }else {
    setDownLimit(downlinit - 3);
    setUpLimit(uplimit - 3);
    setClassBtnDown("colorGreen");
    setClassBtnUp("colorGreen");
    }
  }

  const changeUplimit = () => {
    if(!((downlinit + 3) > sampleResponse.length)) {
    setDownLimit(downlinit + 3);
    setUpLimit(uplimit + 3);
    setClassBtnDown("colorGreen");
    setClassBtnUp("colorGreen");
    }else{
      setClassBtnDown("colorGreen");
      setClassBtnUp("colorGray");
    }
  }
 
  const goToDetailsPage = () => {
    localStorage.setItem("detailsLink", `${bike.brand}-${bike.model}`.split(" ").join("-"));
  }

 
  return (
    <section className="main-page-container main-container">
      { sampleResponse.length > 0 ?
        sampleResponse.slice(downlinit, uplimit).map((bike, key) => {
          return(
          <Link 
            to={`${bike.brand}-${bike.model}`.split(" ").join("-")}   
            onClick={() => {
              localStorage.setItem("detailsLink", `${bike.brand}-${bike.model}`.split(" ").join("-"));
              localStorage.setItem("detailsID", bike.id);
            }
          }    
          >
          <div 
            className="motorcycle_wrap"
          >
            <div>
              <div className="bike-image-wrap">
                <img src={bike.image} alt="" className="bike-image"/>
              </div>
            </div>
            <h3>{bike.brand} {bike.model}</h3>
            <p className="bike-description">{bike.description}</p>
          </div>
          </Link>
       )
        }):(<h2>There is no motorcycle yet! You can add a brand new </h2>)
      }
      <div className="next-previous-wrap">
        <button 
        type="button"
        className={`prev-next-btn previous-page ${classBtnDown}`}
        onClick={changeDownlimit}
        >{"<"}</button>
        <button 
        type="button"
        className={`prev-next-btn next-page ${classBtnUp}`}
        onClick={changeUplimit}
        >{">"}</button>
      </div>
    </section>
  );
}

export default MainPage;
