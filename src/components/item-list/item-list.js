import React, { Component } from 'react';
import Item from '../item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './item-list.css';

const ItemList = ({ items, onAddedToCart }) => {
  return (
    <ul className="item-list">
      {
        items.map((item) => {
          return (
            <li key={item.id}>
              <Item
                onAddedToCart={() => onAddedToCart(item.id)}
                item={item} />
            </li>
          )
        })
      }
    </ul>
  );
}


class ItemListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { items, loading, error, onAddedToCart} = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ItemList
        onAddedToCart={onAddedToCart}
        items={items} />
    );
  }
}

const mapStateToProps = ({ itemList: { items, loading, error }}) => {
  return { items, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemListContainer);
