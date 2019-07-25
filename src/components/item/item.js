import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ item, onAddedToCart }) => {
  const { title, author, price, img } = item;
  return (
    <React.Fragment>
        <img src={img} alt="game" />
      <div className="item-details">
        <Link to='/itemdetails' className="item-title">{title}</Link>
        <div className="item-author">{author}</div>
        <div className="item-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-warning add-to-cart">
          Add to cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default Item;
