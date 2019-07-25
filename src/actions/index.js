
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

export const itemAddedToCart = (itemId) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: itemId
  };
};

export const itemRemovedFromCart = (itemId) => {
  return {
    type: 'ITEM_REMOVED_FROM_CART',
    payload: itemId
  };
};

export const allItemsRemovedFromCart = (itemId) => {
  return {
    type: 'ALL_ITEMS_REMOVED_FROM_CART',
    payload: itemId
  };
};

const fetchItems = (storeService, dispatch) => () => {
  dispatch(itemsRequested());
  storeService.getItems()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};

export {
  fetchItems
};
