import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link className="logo" to="/#">OLD Game</Link>
      <Link className="shopping-cart" to='/cart'>
        <i className="cart-icon fa fa-shopping-cart" /> 
        (${total}) <br/> 
        {numItems} items 
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart: { totalItems, orderTotal }}) => {
  return {
    total: orderTotal,
    numItems: totalItems
  };
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(ShopHeader);
