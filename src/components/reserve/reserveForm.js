import React, { Component } from 'react';

class ReserveItem extends Component {
    constructor(props){
        super(props)
    }
    
    handleSubmit = (e) => {
       e.preventDefault();

    }

   render(){
    return (
        <div className='reserveForm-PopUp'>
            <form onSubmit={this.handleSubmit}>
                <div className='form-input-wrap'>
                    <label htmlFor='total_price'>Total price</label>
                    <input type='integer' id='total_price' name="total_price" placeholder="245"/>
                </div>
                <div className='form-input-wrap'>
                    <label htmlFor='start_date'>Start date</label>
                    <input type='date' id='start_date' name="start_date" />
                </div>
                <div className='form-input-wrap'>
                    <label htmlFor='end_date'>End date</label>
                    <input type='date' id='end_date' name="end_date" />
                </div>
                <div className='form-input-wrap'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' name="city" placeholder='Casablanca'/>
                </div>
                <button type='submit'>
                    Submit
                </button>
    
            </form>
        </div>
      )
   }
}

export default ReserveItem;