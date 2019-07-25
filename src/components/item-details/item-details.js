// import React from 'react';
// import Item from '../item';
// import { connect } from 'react-redux';

// import { withItemstoreService } from '../hoc';
// import { fetchItems, itemAddedToCart } from '../../actions';
// import { compose } from '../../utils';
// import ErrorIndicator from '../error-indicator';
// import Spinner from '../spinner';

// import './item-list.css';

// const ItemDetails = ({ items, onAddedToCart }) => {
//   return (
//     <div className="item-details">
//       {
//         items.map((item) => {
//           return (
//             <div key={item.id} className="preview-item">
//               <Item
//                 onAddedToCart={() => onAddedToCart(item.id)}
//                 item={item} />
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }


// class ItemDetailsContainer extends React.Component {

//   componentDidMount() {
//     this.props.fetchBooks();
//   }

//   render() {
//     const { items, loading, error, onAddedToCart} = this.props;

//     if (loading) {
//       return <Spinner />
//     }

//     if (error) {
//       return <ErrorIndicator />
//     }

//     return (
//       <ItemDetails>

//       </ItemDetails>
//     );
//   }
// }

// const mapStateToProps = ({ itemList: { items, loading, error }}) => {
//   return { items, loading, error };
// };

// const mapDispatchToProps = (dispatch, { bookstoreService }) => {
//   return {
//     fetchBooks: fetchBooks(bookstoreService, dispatch),
//     onAddedToCart: (id) => dispatch(bookAddedToCart(id))
//   };
// };

// export default compose(
//   withBookstoreService(),
//   connect(mapStateToProps, mapDispatchToProps)
// )(ItemDetailsContainer);
