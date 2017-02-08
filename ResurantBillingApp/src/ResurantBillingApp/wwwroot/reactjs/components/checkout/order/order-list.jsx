import React from "react";
import OrderItem from "./order-item.jsx";


class OrderItemList extends React.Component{
    render(){
        return (
            <div>
             <OrderItem name="Menu 1  " price="$10"></OrderItem>
             <OrderItem name="Menu 2  " price="$20"></OrderItem>
             <OrderItem name="Menu 3  " price="$30"></OrderItem>
            </div>
            );
    }
}

export default OrderItemList;
