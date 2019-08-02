import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

import {
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecraese, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{'$'+total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus" />
          </button>
          <button
            onClick={() => onDecraese(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus" />
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

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