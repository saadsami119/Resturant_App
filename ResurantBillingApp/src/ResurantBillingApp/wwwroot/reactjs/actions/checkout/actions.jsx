export const onMenuListFetched = (menuList) =>{  
    return {
        type : "ON_MENU_LIST_FETCHED",
        payload :  menuList
    }
}

export const onMenuSelected = (selectedMenuId) =>{
    return {
        type : "ON_MENU_SELECTED",
        payload :  selectedMenuId
    }
}

export const OnOrderQuantityChanged = (selectedOrderId, newQuantity)=>{
    return {
        type : "ON_ORDER_QUANTITY_CHANGED",
        payload :  { selectedOrderId : selectedOrderId , newQuantity}
    }
}