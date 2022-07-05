export const initialState = {
     basket : [],
     inCart : '',
     user : null,
     reference : ''
}

// Calculates the sum total of items in basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)=> amount + item.price, 0);

export const reducer = (state, action) =>{

    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                basket : [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART' :
            return {
                ...state, basket : state.basket.filter(item => item.id !== action.id )
            }
        case 'ALREADY_IN_CART':
            return {
                ...state,
                inCart : action.inCart

            }
        case 'QTY':
            const index = state.basket.findIndex((item)=> item.id === action.id);
            if(index >=0 ){
                state.basket[index].qty = action.qty;
                state.basket[index].price = (action.qty * state.basket[index].priceNew);
                

                console.log(state.basket[index]?.qty);
            }
            return {
                ...state,
                basket : [...state.basket]
            }
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
        case 'EMPTY_BASKET' :
            return {
                ...state,
                basket : action.basket
            }
        case 'SET_REFERENCE' :
            return {
                ...state,
                reference : action.reference
            }
        default :
            return state
    }
    
    
}