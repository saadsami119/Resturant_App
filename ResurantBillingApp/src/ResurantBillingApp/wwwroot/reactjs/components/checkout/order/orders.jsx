import React from "react";
import OrderItemList from "./order-list.jsx";

class Order extends React.Component {
    render() {
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <div style={{ height: '10%' }}>
                        <legend>Orders</legend>
                    </div>
                    <hr></hr>
                    <div style={{ height: '85%' }}>
                        <OrderItemList></OrderItemList>
                    </div>

                </div>
            </div>
        );
    }
}

export default Order;
