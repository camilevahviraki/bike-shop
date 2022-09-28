import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMotorcycle } from '../../redux/add/addItem';
import avatarImg from '../../icons/bike-icon.png';
import './add.css';

function AddItem() {
  const userDetails = useSelector((state) => state.authenticationReducer);
  const [avatar, setAvatar] = useState(avatarImg);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const motorcycleParams = {
      brand: e.target.brand.value,
      model: e.target.model.value,
      year: e.target.year.value,
      image: e.target.image.files[0],
      booking_fee: e.target.bookingfee.value,
      description: e.target.description.value,
      reserved: false,
      user_id: userDetails.user.id,
    };

    const { token } = userDetails;
    dispatch(addMotorcycle(motorcycleParams, token));
    console.log("+++++++++++++++++++++++++++++");
    console.log('added?', motorcycleParams);
    console.log("+++++++++++++++++++++++++++++");
  };

  return (
    <form className="form-add-new-bike" onSubmit={handleSubmit}>
      <article className="image-avatar-wrap">
        <img src={avatar} alt="" className="image-avatar" />
      </article>

      <div className="input-wrap top-field">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="http://motorcycle.png"
          accept="image/*"
          onChange={handleUpload}
        />
        {/* <input type="text" id="image" name="image" placeholder="http://motorcycle.png"/> */}
      </div>

      <div className="input-wrap">
        <label htmlFor="brand">brand</label>
        <input type="text" id="brand" name="brand" placeholder="brand" required />
      </div>
      <div className="input-wrap">
        <label htmlFor="model">model</label>
        <input type="text" id="model" name="model" placeholder="model" required />
      </div>

      <div className="input-wrap">
        <label htmlFor="year">Year</label>
        <input type="number" id="year" name="year" placeholder="2014" required />
      </div>

      <div className="input-wrap">
        <label htmlFor="bookingfee">
          Booking fee
          ($)
        </label>
        <input type="number" id="bookingfee" name="bookingfee" placeholder="2400" required />
      </div>
      <div className="input-wrap">
        <label htmlFor="description">Description</label>
        <textarea
          type="textarea"
          id="description"
          name="description"
          placeholder="designed by camilux in 2020, Palo alto"
        />
      </div>
      <button type="submit" className="btn-add-new">Add new bike</button>
    </form>
  );
}

export default AddItem;
