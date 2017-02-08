const CheckoutReducer = (state = { }, action) => {
    
    switch (action.type) {
        
        case 'ON_MENU_LIST_FETCHED':                          
            var newState = Object.assign({}, state);            
            newState.menus = action.payload;
            return newState;            

        default:
            return state
    }
}

export default CheckoutReducer;