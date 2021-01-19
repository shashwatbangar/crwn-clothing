import {createSelector} from 'reselect'


//input selector - selectors which returns a piece of state
const selectCart = state =>  state.cart;

const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
        0
        ) 

);

export default selectCartItemsCount;
export {selectCartItems}