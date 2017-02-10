import React from "react";
import OrderItemList from "./order-list.jsx";

class Order extends React.Component{
    render(){
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <legend>Orders</legend>                  
                    <div>
                        <OrderItemList></OrderItemList>
                    </div>
                </div>
            </div>
            );
    }
}

export default Order;
