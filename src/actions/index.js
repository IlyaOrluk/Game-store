
const itemsLoaded = (newItem) => { 
  return {
    type: 'FETCH_ITEM_SUCCESS',// [request_type]_[object]_[action]
    payload: newItem
  };
};

const itemsRequested = () => {
  return {
    type: 'FETCH_ITEM_REQUEST'
  };
};

const itemsError = (error) => {
  return {
    type: 'FETCH_ITEM_FAILURE',
    payload: error
  };
};

export const bookAddedToCart = (itemId) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: itemId
  };
};

export const bookRemovedFromCart = (itemId) => {
  return {
    type: 'ITEM_REMOVED_FROM_CART',
    payload: itemId
  };
};

export const allBooksRemovedFromCart = (itemId) => {
  return {
    type: 'ALL_ITEMS_REMOVED_FROM_CART',
    payload: itemId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(itemsRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};

export {
  fetchBooks
};
