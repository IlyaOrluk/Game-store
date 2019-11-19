import React from 'react';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { fetchItems, itemAddedToCart } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './item-details.css';

const Detail = ({ item, field, label, itemTag }) => {
    return (
        React.createElement(itemTag, null, `${label} ${item[field]}`)
    );
};

const ItemDetails = ({ items, itemId, onAddedToCart, ...props }) => {
    const item = items[itemId-1];
    console.log(item);
    const { title, img, price } = item;
    return (
        <div className='preview-item-details'>
            <div className='item-card'>
            <img src={img} alt="game" className='item-details-img' />
            <button
                    onClick={() => onAddedToCart(item.id)}
                    className="btn btn-warning add-to-cart">
                    Add to cart ${price}
                </button>
            </div>

            <div className='item-details'>
                <h4>{title}</h4>
                <hr></hr>
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })
                }

            </div>
        </div>
    );
}


class ItemDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { items, itemId, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <React.Fragment>
                <ItemDetails
                    onAddedToCart={onAddedToCart}
                    itemId={itemId}
                    items={items}>
                        
                    <Detail itemTag='span' label='Author: ' field='author' /><br/>
                    <Detail itemTag='span' label='Summary: ' field='summary' />
                    <Detail itemTag='span' label='Price: $' field='price' />

                    
                </ItemDetails>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ itemList: { items, loading, error } }) => {
    return { items, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchBooks: fetchItems(storeService, dispatch),
        onAddedToCart: (id) => dispatch(itemAddedToCart(id))
    };
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemDetailsContainer);
