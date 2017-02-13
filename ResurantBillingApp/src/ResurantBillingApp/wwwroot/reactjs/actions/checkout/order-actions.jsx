export const OnOrderQuantityChanged = (selectedOrderId, newQuantity)=>{
    return {
        type : "ON_ORDER_QUANTITY_CHANGED",
        payload :  { selectedOrderId : selectedOrderId , newQuantity}
    }
}