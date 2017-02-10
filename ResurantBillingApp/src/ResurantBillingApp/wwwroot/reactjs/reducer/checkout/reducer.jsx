const CheckoutReducer = (state = { menus: [], selectedOrders: [] }, action) => {

    switch (action.type) {

        case 'ON_MENU_LIST_FETCHED':
            var newState = Object.assign({}, state);           
            newState.menus = action.payload;
            return newState;

        case 'ON_MENU_SELECTED':
            let order = state.selectedOrders.filter(x => x.id == action.payload)[0];
            
            if (order !== undefined) {
                return state;
            }

            var newState = Object.assign({}, state);
            let selectedMenu = state.menus.filter(x => x.id == action.payload)[0];
            selectedMenu.quantity = 1;
            selectedMenu.amount = selectedMenu.price * selectedMenu.quantity;
            newState.selectedOrders.push(selectedMenu);
            return newState;

        case "ON_ORDER_QUANTITY_CHANGED":
            var newState = Object.assign({}, state);
            let selectedOrder = newState.selectedOrders.filter(x => x.id == action.payload)[0];
            selectedOrder.quantity = selectedOrder.quantity + 1;
            selectedOrder.amount = selectedOrder.price * selectedOrder.quantity;
            return newState;

        default:
            return state
    }
}

export default CheckoutReducer;