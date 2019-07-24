const updateCartItems = (cartItems, cartItem, idx) => {

    if (cartItem.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
      ];
    }
  
    if (idx === -1) {
      return [
        ...cartItems,
        cartItem
      ];
    }
  
    return [
      ...cartItems.slice(0, idx),
      cartItem,
      ...cartItems.slice(idx + 1)
    ];
  };
  
  const updateCartItem = (item, cartItem = {}, quantity) => {
  console.log(cartItem)
    const {
      id = item.id,
      count = 0,
      title = item.title,
      total = 0 } = cartItem;
  
    return {
      id,
      title,
      count: count + quantity,
      total: total + quantity*item.price
    };
  };
  
  const updateOrder = (state, itemId, quantity) => {
    const { itemList: { items } , shoppingCart: { cartItems }} = state;
  
    const item = items.find(({id}) => id === itemId);
    const itemIndex = cartItems.findIndex(({id}) => id === itemId);
    const cartItem = cartItems[itemIndex];
  
    const newItem = updateCartItem(item, cartItem, quantity);
    return {
      orderTotal: state.shoppingCart.orderTotal+(item.price*quantity),
      totalItems: state.shoppingCart.totalItems+quantity,
      cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
  };
  
  const updateShoppingCart = (state, action) => {
  
    if (state === undefined) {
      return {
        cartItems: [],
        orderTotal: 0,
        totalItems: 0
      }
    }
  
    switch(action.type) {
      case 'ITEM_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1);
  
      case 'ITEM_REMOVED_FROM_CART':
        return updateOrder(state, action.payload, -1);
  
      case 'ALL_ITEMS_REMOVED_FROM_CART':
        const cartItem = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -cartItem.count);
  
      default:
        return state.shoppingCart;
    }
  };
  
  export default updateShoppingCart;