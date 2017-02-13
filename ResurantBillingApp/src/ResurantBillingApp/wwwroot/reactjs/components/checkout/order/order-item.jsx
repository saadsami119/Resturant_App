import React from "react";
import { OnOrderQuantityChanged } from "../../../actions/checkout/order-actions.jsx";

class OrderItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quantity: this.props.quantity };
        this.onQuantityChanged = this.onQuantityChanged.bind(this);
    }

    render() {
        return (
            <div>
                <div className="list-group-item">
                    <div className="row-content">
                        <div className="least-content"><h4><strong>${this.props.amount}</strong></h4></div>
                        <div className="least-content" style={{ marginTop: 50 }} >
                            <button type="button" className="btn btn-danger btn-sm">
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        </div>

                        <h4 className="list-group-item-heading">
                            <p className=" text-info no-space">{this.props.name}</p>
                        </h4>
                        <div className="row">
                            <div className="col-xs-3">
                                <div className="form-group form-group-sm label-static">
                                    <label className="control-label">Quantity</label>
                                    <input type="text" className="form-control" type="number" value={this.state.quantity} min="1" onChange={this.onQuantityChanged}></input>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <p className="list-group-item-text" style={{ marginTop: 21, textAlign: 'center' }} > <em> x ${this.props.price}</em></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="list-group-separator"></div>
            </div>
        );
    }

    onQuantityChanged(event) {
        this.setState({ quantity: event.target.value })
        this.context.store.dispatch(OnOrderQuantityChanged(this.props.id, event.target.value))
    }

}

OrderItem.contextTypes = {
    store: React.PropTypes.object
}

export default OrderItem;
