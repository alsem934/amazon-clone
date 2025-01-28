import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css';
import { Type } from '../../Utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { id, title, price, rating, image, description } = product;

  const {state, dispatch } = useContext(DataContext);
   

  // console.log(state)

// console.log(product)
  const addToCart = () => {
   
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
       image,
        title,
       id,
     rating,
         price,
        description,
      },
    });
  };

  return (
    <div className={`${classes.card__container} ${flex ? classes.product__flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3> {title} </h3>
        {renderDesc && <div style={{ maxWidth: '750px' }}> {description}</div>}
        <div>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} className={classes.rating} />
          {/* counter */}
          <small> {rating?.count} </small>
          <div>
            <CurrencyFormat amount={price} />
            <div />
        {  renderAdd &&  <button className={classes.button} onClick={addToCart}>
              add to cart
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
