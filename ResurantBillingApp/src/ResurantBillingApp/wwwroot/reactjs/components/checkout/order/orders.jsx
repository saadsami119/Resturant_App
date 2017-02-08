import React from "react";
import OrderItemList from "./order-list.jsx";

class Order extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="well">
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
