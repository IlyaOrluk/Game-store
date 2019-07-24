import React from 'react';
import './item.css';

const Item = ({ item, onAddedToCart }) => {
  const { title, author, price, coverImage } = item;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-warning add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
