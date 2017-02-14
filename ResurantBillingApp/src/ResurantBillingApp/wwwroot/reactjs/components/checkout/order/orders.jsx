import React from "react";
import OrderItemList from "./order-list.jsx";

class Order extends React.Component {
    render() {
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <div style={{ height: '10%' }}>
                        <legend>Orders</legend>
                        <hr></hr>                        
                    </div>                   

                    <div className="list-box" style={{ height: '90%' }}>
                        <OrderItemList></OrderItemList>
                    </div>

                </div>
            </div>
        );
    }
}

export default Order;
