import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';

const Item = ({ item, onAddedToCart }) => {
  const { title, author, price, img, id } = item;
  return (
    <React.Fragment>
        <img src={img} alt="game" />
      <div className="item-details">
        <Link to={`/itemdetails/${id}`} className="item-title">{title}</Link>
        <span className="item-author">{author}</span>
        <span className="item-price">${price}</span>
        
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
