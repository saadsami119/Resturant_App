export const OnOrderQuantityChanged = (selectedOrderId, newQuantity) => {
    return {
        type: "ON_ORDER_QUANTITY_CHANGED",
        payload: { selectedOrderId: selectedOrderId, newQuantity }
    }
}

export const onOrderRemoved = (selectedOrderId) => {
    return {
        type: "ON_ORDER_REMOVED",
        payload: { selectedOrderId: selectedOrderId }
    }
}