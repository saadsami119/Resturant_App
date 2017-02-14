import React from "react";
import { OnOrderQuantityChanged, onOrderRemoved } from "../../../actions/checkout/order-actions.jsx";

class OrderItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quantity: this.props.quantity };
        this.onQuantityChanged = this.onQuantityChanged.bind(this);
        this.onOrderRemoved = this.onOrderRemoved.bind(this);
    }

    render() {
        return (
            <div className="list-group-item">
                <div className="row-content">
                    <div className="least-content">
                        <h4>${this.props.amount}</h4>
                        <button type="button" className="btn btn-danger btn-sm" onClick={this.onOrderRemoved}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>


                    <button className="btn btn-primary menu-btn">{this.props.name}</button>

                    <div className="row">
                        <div className="col-xs-2">
                            <div className="form-group label-static" style={{ margin: 0, padding: 0 }}>
                                <input type="text" className="form-control quantity-textbox" type="number"
                                    value={this.state.quantity} min="1" onChange={this.onQuantityChanged}>
                                </input>
                            </div>

                        </div>
                        <div className="col-xs-6">
                            <p className="list-group-item-text" style={{ fontSize: 14 }}> <em> &nbsp; x  &nbsp; ${this.props.price}</em></p>
                        </div>
                    </div>

                </div>

                <div className="list-group-separator"></div>
            </div>
        );
    }

    onQuantityChanged(event) {
        this.setState({ quantity: event.target.value })
        this.context.store.dispatch(OnOrderQuantityChanged(this.props.id, event.target.value));
    }

    onOrderRemoved() {
        this.context.store.dispatch(onOrderRemoved(this.props.id));
    }
}

OrderItem.contextTypes = {
    store: React.PropTypes.object
}

export default OrderItem;
