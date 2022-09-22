import {Component, useEffect, useState} from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { detailsMotorcycle, reserveMotorcycle} from '../../redux/details/details';
import './details.css';


class Details extends Component {

  componentDidMount() {
    this.props.fetchDetails(parseInt(localStorage.getItem("detailsID")));
    if(this.props.detailsData.reserved !== undefined){
      this.setState({buttonStyle: this.props.detailsData.reserved})
    }
  }

  // componentDidUpdate()

 render() {
  const detailsData = this.props.detailsData;
  let reservation = detailsData.reserved;

  return (
    <div className="detailsPage">
      {
        detailsData.brand ? (
          <div className="details-wrapper"> 
            <div>
              <div className="details-Image-wrap">
                <img src={detailsData.image} alt="" className="details-Image"/>
              </div>
            </div>
            <div className="detailsMenuItem">
              <h2 className="details-title">{detailsData.brand}</h2>
              <div className="details-description">
                <p className="description-p gray">Finance Fee <span>$123</span></p>
                <p className="description-p">Option To Purchase Fee <span>$249</span></p>
                <p className="description-p gray">Total Payable Amount <span>$9.54</span></p>
                <p className="description-p">Duration <span>3 Days</span></p>
                <h4 className="details-total-price">5.9% APR representative</h4>
                <div>
                  <div className="circle-wrap">
                    <div className="circle-degrade">
                      <div className="inner-degrade"/>
                    </div>
                    <div className="inner-circle"/>
                  </div>
                  <button 
                    type="button"
                    class={reservation ? "Reserve-details details-reserved": "Reserve-details"} 
                    onClick={()=> {
                      this.props.reserveMotor(detailsData.id);
                    }}
                  >
                    {reservation ? "Cancel Reservation":" Reserve > "}
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        ):
        (<h2>...loading</h2>)
      }
    </div>
  );
 }
}

const mapDispatchToProps = (dispatch) => (
 {
   fetchDetails: (id) => dispatch(detailsMotorcycle(id)),
   reserveMotor: (id) => dispatch(reserveMotorcycle(id)),
 }
);

const mapState = (state) => ({ detailsData: state.detailsMotorcycleReducer });

export default connect(mapState, mapDispatchToProps)(Details);
[]