import React from "react";
import { OnOrderQuantityChanged } from "../../../actions/checkout/actions.jsx";

class OrderItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quantity: this.props.quantity };
        this.onQuantityChanged = this.onQuantityChanged.bind(this);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>${this.props.price}</td>
                <td>
                    <input id="quantity" name="quantity" type="number" className="number-textbox" value={this.state.quantity} onChange={this.onQuantityChanged} ></input>
                </td>
                <td>${this.props.amount}</td>
            </tr>
        );
    }

    onQuantityChanged(event) {       
        this.setState({ quantity: event.target.value })
        this.context.store.dispatch(OnOrderQuantityChanged(this.props.id))
    }

}

OrderItem.contextTypes = {
    store: React.PropTypes.object
}

export default OrderItem;
