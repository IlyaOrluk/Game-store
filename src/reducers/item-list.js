const updateItemList = (state, action) => {

    if (state === undefined) {
      return {
        items: [],
        loading: true,
        error: null
      };
    }
  
    switch (action.type) {
      case 'FETCH_ITEM_REQUEST':
        return {
          items: [],
          loading: true,
          error: null
        };
  
      case 'FETCH_ITEM_SUCCESS':
        return {
          items: action.payload,
          loading: false,
          error: null
        };
  
      case 'FETCH_ITEM_FAILURE':
        return {
          items: [],
          loading: false,
          error: action.payload
        };
  
      default:
        return state.itemList;
    }
  };
  
  export default updateItemList;