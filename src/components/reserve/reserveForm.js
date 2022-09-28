import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reserveMotorcycle } from '../../redux/main/motorcycles';
import avaterImg from '../../icons/bike-icon.png';
import './reserveForm.css';

class ReserveItem extends Component {
  constructor(props) {
    super(props);
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const startDate = e.target.start_date.value;
      const endDate = e.target.end_date.value;
      const city = e.target.city.value;
      if (city !== '' && endDate !== '' && startDate !== '') {
        const { token } = this.props.userData;
        const data = {
          user_id: this.props.userData.user.id,
          total_price: (this.props.bike.booking_fee + (this.props.bike.booking_fee / 20)),
          start_date: startDate,
          end_date: endDate,
          motorcycle_id: this.props.bike.id,
          city,
        };
        this.props.reserveMotorcycle(data, token);
        this.props.hideForm();
      }
    }

    render() {
      const bookingFee = parseInt(this.props.bike.booking_fee);
      const taxes = bookingFee / 20;

      return (
        <div className="reserveForm-PopUp">
          <div className="reserve-popup-details">
            <div className="closePopUp" onClick={this.props.hideForm}>
              <div className="closePopUp-child">
                <div className="child1" />
                <div className="child2" />
              </div>
            </div>
            <div className="image-popup-wrap">
              <img src={this.props.bike.image_url ? this.props.bike.image_url : avaterImg} alt="" className="image-popup" />
            </div>
            <h2 className="popup-txt">
              Brand:
              <span>{this.props.bike.brand}</span>
            </h2>
            <h3 className="popup-txt">
              Model:
              <span>{this.props.bike.model}</span>
            </h3>
            <h4 className="popup-txt">
              Booking fee:
              <span>
                $
                {bookingFee}
              </span>
            </h4>
            <h4 className="popup-txt">
              Taxes (5%):
              <span>
                $
                {taxes}
              </span>
            </h4>
            <h3 className="popup-txt">
              Total:
              <span>
                $
                {bookingFee + taxes}
              </span>
            </h3>
          </div>
          <form onSubmit={this.handleSubmit} className="reserve-bike-form">
            <div className="form-input-wrap">
              <label htmlFor="start_date">Start date</label>
              <input type="date" id="start_date" name="start_date" required />
            </div>
            <div className="form-input-wrap">
              <label htmlFor="end_date">End date</label>
              <input type="date" id="end_date" name="end_date" required />
            </div>
            <div className="form-input-wrap">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="Casablanca" required />
            </div>
            <div className="form-input-wrap">
              <button type="submit">
                Reserve
              </button>
            </div>
          </form>
        </div>
      );
    }
}

const mapState = (state) => ({
  userData: state.authenticationReducer,
});

const mapDispatch = (dispatch) => ({
  reserveMotorcycle: (data, token) => dispatch(reserveMotorcycle(data, token)),
});

export default connect(mapState, mapDispatch)(ReserveItem);
