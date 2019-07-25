import React, { Component } from 'react';
import Item from '../item';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { fetchItems, itemAddedToCart } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './item-list.css';

const ItemList = ({ items, onAddedToCart }) => {
  return (
    <div className="item-list">
      {
        items.map((item) => {
          return (
            <div key={item.id} className="preview-item">
              <Item
                onAddedToCart={() => onAddedToCart(item.id)}
                item={item} />
            </div>
          )
        })
      }
    </div>
  );
}


class ItemListContainer extends Component {

  componentDidMount() {
    this.props.fetchItems();
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

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchItems: fetchItems(storeService, dispatch),
    onAddedToCart: (id) => dispatch(itemAddedToCart(id))
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemListContainer);
