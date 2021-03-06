﻿const CheckoutReducer = (state = { menus: [], selectedOrders: [] }, action) => {

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
            let selectedOrder = newState.selectedOrders.filter(x => x.id == action.payload.selectedOrderId)[0];
            selectedOrder.quantity = action.payload.newQuantity;
            selectedOrder.amount = selectedOrder.price * selectedOrder.quantity;
            return newState;

        case "ON_ORDER_REMOVED":
            var newState = Object.assign({}, state);
            for (let i = newState.selectedOrders.length - 1; i>=0; i--) {
                if (newState.selectedOrders[i].id === action.payload.selectedOrderId) {
                    newState.selectedOrders.splice(i, 1);
                }
            }
            return newState;

        case 'ON_STORE_CLEAR':
            state.selectedOrders = [];
            return state;

        default:
            return state
    }
}

export default CheckoutReducer;