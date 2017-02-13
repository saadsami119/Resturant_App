import React from "react";
import OrderItemList from "./order-list.jsx";

class Order extends React.Component {
    render() {
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                     <div style={{ height: '15%' }}>
                        <legend>Orders</legend>
                    </div>

                   <div style={{ height: '85%' }}>
                        <OrderItemList></OrderItemList>
                    </div>

                </div>
            </div>
        );
    }
}

export default Order;
