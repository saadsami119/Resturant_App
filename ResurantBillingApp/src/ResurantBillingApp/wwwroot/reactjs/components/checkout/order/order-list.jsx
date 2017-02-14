import React from "react";
import OrderItem from "./order-item.jsx";


class OrderItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedOrders: [] };
    }

    componentDidMount() {
        this.setState({ selectedOrders: [] });
    }

    render() {

        this.context.store.subscribe(() => {
            this.setState({ selectedOrders: this.context.store.getState().checkout.selectedOrders });
        });

       return (
         <div className="div-full-height" >
            <div className="list-group div-full-height scrollable">
                {this.generateSelectedOrdersList()}
            </div>
        </div>);
    }

    generateSelectedOrdersList() {
        return (this.state.selectedOrders.map((order, index) => {
            return (<OrderItem key={order.id} id={order.id} name={order.name} price={order.price} quantity={order.quantity} amount={order.amount} ></OrderItem>)
        }))
    }
}

OrderItemList.contextTypes = {
    store: React.PropTypes.object
}

export default OrderItemList;
