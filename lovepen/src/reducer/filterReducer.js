export const filterReducer =(state,action)=>{
    switch (action.type) {
       case 'SORT_BY_PRICE':
           return {...state , sort : action.payload}

        case 'FILTER_BY_SEARCH':
            return {...state , searchQuery :action.payload}

        case 'CLEAR_FILTERS':
            return {
                searchQuery :""
            }

    
        default:
            return state;
    }
}