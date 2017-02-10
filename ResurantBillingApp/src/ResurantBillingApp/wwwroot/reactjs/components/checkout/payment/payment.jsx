import React from "react";
import { OnOrderQuantityChanged } from "../../../actions/checkout/actions.jsx";


class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { salesTax: 0, totalAmount: 0, sum: 0, cashToReturn: 0 };
        this.onCashEntered = this.onCashEntered.bind(this);
        this.isValidToCheckout = this.isValidToCheckout.bind(this);
    }


    render() {
        let salexTax = 19.5;

        this.context.store.subscribe(() => {
            let totalAmount = this.getTotalAmount();
            let taxAmount = totalAmount * (salexTax / 100);
            this.setState({
                salesTax: parseFloat(taxAmount).toFixed(2),
                totalAmount: parseFloat(totalAmount).toFixed(2),
                sum: parseFloat(totalAmount + taxAmount).toFixed(2)
            })
        });


        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <legend>Payment</legend>
                    <table className="table table-responsive">
                        <tbody>
                            <tr>
                                <td> <strong> Total Amount </strong> </td>
                                <td> {this.state.totalAmount} </td>
                            </tr>
                            <tr>
                                <td> <strong> Sales Tax (19.5%) </strong> </td>
                                <td> {this.state.salesTax} </td>
                            </tr>
                            <tr className="info">
                                <td > <strong> Sum </strong> </td>
                                <td> {this.state.sum} </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="form-group label-static">
                        <label className="control-label">Cash Recieved </label>
                        <input type="text" className="form-control" onChange={this.onCashEntered} ></input>
                        <span className="help-block">Cash to Reurn <code>{this.state.cashToReturn}</code></span>
                    </div>

                    <button href="javascript:void(0)" style={{ float: 'right' }} className="btn btn-primary btn-md" disabled={!this.isValidToCheckout()} >Checkout</button>
                </div>
            </div>
        );
    }

    getTotalAmount() {

        let totalAmount = 0;
        this.context.store.getState().checkout.selectedOrders.map((order, index) => {
            totalAmount = totalAmount + order.amount;
        });

        return totalAmount;
    }

    onCashEntered(event) {
        var cashEntered = parseFloat(event.target.value);
        if (isNaN(cashEntered)) {
            return;
        }
        if (this.state.totalAmount === 0) {
            return;
        }

        var cashToReturn = cashEntered - parseFloat(this.state.sum);
        console.log("cashToReturn : ", cashToReturn);
        this.setState({ cashToReturn: cashToReturn.toFixed(2) });
    }

    isValidToCheckout() {
        if (this.context.store.getState().checkout.selectedOrders.length === 0) {
            return false;
        }

        if (this.state.cashToReturn <= 0) {
            return false;
        }
        return true;
    }
}
Payment.contextTypes = {
    store: React.PropTypes.object
}


export default Payment;
