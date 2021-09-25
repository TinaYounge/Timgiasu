import { GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS } from "./CartType";

const initialState = {
  loading: false,
  cart: {},
  error: "",
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_REQUEST:
      return { ...state, loading: true };
    case GET_CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
        error: "",
      };
    case GET_CART_FAIL:
      return state;
    default:
      return state;
  }
}

export default CartReducer;
