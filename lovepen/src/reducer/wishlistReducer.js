export const wishlistReducer =(state,action)=>{
    switch (action.type) {
         

        case "ADD_TO_WISH":
                if (
                state.itemsInWishList.some((wishItem) => wishItem.id === action.payload.id)
                ) {
                return {
                    ...state,
                    itemsInWishList: state.itemsInWishList.map((wishItem) =>
                    wishItem.id === action.payload.id
                        ? { ...wishItem, quantity: wishItem.quantity + 1 }
                        : wishItem
                    ),
                };
                } else {
                return {
                    ...state,
                    itemsInWishList: state.itemsInWishList.concat({
                    ...action.payload,
                    quantity: 1,
                    }),
                };
                }

        
            case "REMOVE_FROM_WISHLIST":
                    return {...state , itemsInWishList :state.itemsInWishList.filter(c=>c.id != action.payload.id)}

            case "INCREMENT_QTY_FROM_WISHLIST":
                return {...state, itemsInWishList :state.itemsInWishList.map(c=>c.id ===action.payload.id ?{...c, quantity:c.quantity+1}:{c})}


            case "DECREMENT_QTY_FROM_WISHLIST":
                    return {...state, itemsInWishList :state.itemsInWishList.map(c=>c.id ===action.payload.id ?{...c, quantity:c.quantity-(c.quantity > 0 ? 1 : 0)}:{c})}
    

            
    
        default:
            return state;
    }
}