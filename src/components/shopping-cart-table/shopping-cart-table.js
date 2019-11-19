import React from 'react';
import './shopping-cart-table.scss';
import { connect } from 'react-redux';

import {
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecraese, onDelete }) => {
  const renderCard = (item, idx) => {
    const { id, title, img, count, total } = item;
    console.log(item)
    return (
      <div key={id} className='shopping-card'>
        <span>{idx+1}</span>
        <span>{title}</span>
        <img src={img} alt='img'/>
        <div>
        <span>{count}</span>
        <span>{'$'+total}</span>

          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus plus" />
          </button>
          <button
            onClick={() => onDecraese(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus minus" />
          </button>
        </div>
        <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash delete" />
          </button>

      </div>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your Order:</h2>
          <div className='d-flex'>
          {items.map(renderCard)}
          </div>
      <div className="total">
        Total: {'$' + total}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
    onIncrease: itemAddedToCart,
    onDecraese: itemRemovedFromCart,
    onDelete: allItemsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
