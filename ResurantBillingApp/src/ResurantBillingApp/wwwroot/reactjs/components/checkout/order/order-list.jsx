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
            this.setState({selectedOrders : this.context.store.getState().checkout.selectedOrders});                       
        });

        return (
             <table className="table table-responsive table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Menu</th>                           
                            <th>Price</th>                             
                            <th>Quantity</th>                           
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.createSelectedOrdersList()}
                    </tbody>
                </table>
            );
        }

    createSelectedOrdersList() {       
        
        return (this.state.selectedOrders.map((order, index) => {
            return (<OrderItem key={order.id} id={order.id} name={order.name} price={order.price} quantity={order.quantity} amount={order.amount} ></OrderItem>)
        }))
    }
}

OrderItemList.contextTypes={
     store : React.PropTypes.object
}

export default OrderItemList;
