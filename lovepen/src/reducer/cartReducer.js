export const cartReducer =(state,action)=>{
    switch (action.type) {
        

                      
            case "ADD_TO_CART":
                if (
                state.itemsInCart.some((cartItem) => cartItem.id === action.payload.id)
                ) {
                return {
                    ...state,
                    itemsInCart: state.itemsInCart.map((cartItem) =>
                    cartItem.id === action.payload.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                    ),
                };
                } else {
                return {
                    ...state,
                    itemsInCart: state.itemsInCart.concat({
                    ...action.payload,
                    quantity: 1,
                    }),
                };
                }


                case "REMOVE_FROM_CART":
                        return {...state , itemsInCart :state.itemsInCart.filter(c=>c.id != action.payload.id)}

                case "INCREMENT_QTY":
                    // return {...state, itemsInCart :state.itemsInCart.map(c=>c.id ===action.payload.id ?{...c, quantity:c.quantity+1}:{c})}
                    return {
                        ...state , 
                        itemsInCart : state.itemsInCart.filter((c)=>c.id=== action.payload.id?(c.quantity= action.payload.quantity+1):(c.quantity))
                    }
    

                case "DECREMENT_QTY":
                        // return {...state, itemsInCart :state.itemsInCart.map(c=>c.id ===action.payload.id ?{...c, quantity:c.quantity-(c.quantity > 0 ? 1 : 0)}:{c})}
                        return {
                            ...state , 
                            itemsInCart : state.itemsInCart.filter((c)=>c.id=== action.payload.id?(c.quantity= action.payload.quantity-(c.quantity > 0 ? 1 : 0)):(c.quantity))
                        }

                
                case "GET_TOTAL":
                    let {totalAmount} = state.itemsInCart.reduce(
                        (accum,curVal)  =>{
                            let {price , quantity} = curVal;

                            let updatedTotalAmount = Number(price)*quantity;
                            accum.totalAmount += updatedTotalAmount;

                            return accum;
                        },
                        {
                            totalAmount:0
                        }                 
                    )
                    return {...state , totalAmount}

                
                
                

                
              

                default:
           return state;
    }
}
