export const initialStore = (payload) => {
  return {
    type: "INIT_STORE",
    payload: payload,
  };
};

export const addToStore = (payload) => {
  return {
    type: "ADD_TO_STORE",
    value: 1,
    payload: payload,
  };
};

export const decrementItem = (payload) => {
  return {
    type: "DECREMENT_ITEM",
    payload: payload,
  };
};

export const storeWishList = (payload) => {
  return {
    type: "FETCH-WISHLIST",
    payload: payload,
  };
};

export const emptyWishList = () => {
  return {
    type: "REMOVE_WISHLIST",
  };
};

export const deleteProduct = (payload) => {
  return {
    type: "DELETE_FROM_CART",
    payload: payload,
  };
};

export const clearCart = () => {
  return {
    type: "EMPTY_CART",
    //payload: payload,
  };
};

export const loadWishList = (payload) => {
  return {
    type: "LOAD_WISHLIST",
    payload: payload,
  };
};
