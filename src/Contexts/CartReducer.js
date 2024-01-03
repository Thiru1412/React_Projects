const Storage = (cartItems) =>{
    localStorage.setItem('cart',JSON.stringify(cartItems.length > 0 ? cartItems : []));
}


export const CartReducer = (state,action) => {
    let index = -1;
    if(action.payload){
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }
    let newCartItems = [...state.cartItems];
    switch(action.type){
        case 'ADD':
            if (index === -1){
                newCartItems.push({...action.payload,quantity:1});
            }
            else{
                newCartItems[index].quantity++;
            }
            break;
        case 'REMOVE':
            if(index > -1){
                newCartItems = state.cartItems.filter((p) => p.id !== action.payload.id);
            }
            break;
        case 'INCQTY':
            if(index > -1)
                newCartItems[index].quantity++;
            break;
        case 'DECQTY':
            if(index > -1)
                if(newCartItems[index].quantity > 1)
                    newCartItems[index].quantity--;
            break;
        case 'CLEAR':
            newCartItems = [];
            break;
    }
    state.cartItems = newCartItems;
    Storage(newCartItems);
    return state;
}