import React from "react";
import { onClearStore } from "../../../actions/checkout/payment-actions.jsx";


class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            salesTax: 0,
            totalAmount: 0,
            sum: 0,
            cashToReturn: 0,
            cashRecieved: 0
        };

        this.onCashRecieved = this.onCashRecieved.bind(this);
        this.isValidToCheckout = this.isValidToCheckout.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }


    render() {
        let salexTax = 19.5;

        this.context.store.subscribe(() => {
            let totalAmount = this.getTotalAmount();
            let taxAmount = totalAmount * (salexTax / 100);
            let sum = totalAmount + taxAmount;            
            let cashToReturn = this.state.cashRecieved - sum;
           
            this.setState({
                salesTax: parseFloat(taxAmount).toFixed(2),
                totalAmount: parseFloat(totalAmount).toFixed(2),
                sum: sum.toFixed(2),
                cashToReturn :  cashToReturn.toFixed(2)
            })
        });


        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <div style={{ height: '10%' }}>
                        <legend>Counter</legend>
                    </div>
                    <div style={{ height: '85%' }}>
                        <table className="table table-responsive">
                            <tbody>
                                <tr>
                                    <td> <strong> Total Amount </strong> </td>
                                    <td> ${this.state.totalAmount} </td>
                                </tr>
                                <tr>
                                    <td> <strong> Sales Tax (19.5%) </strong> </td>
                                    <td> ${this.state.salesTax} </td>
                                </tr>
                                <tr className="info">
                                    <td > <strong> Sum </strong> </td>
                                    <td> ${this.state.sum} </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="form-group label-static">
                            <label className="control-label">Cash Recieved </label>
                            <input type="text" className="form-control" value={this.state.cashEntered} onChange={this.onCashRecieved} ></input>
                        </div>
                        {this.isValidToCheckout() ? (<span className="help-block">Cash to Reurn <code>{this.state.cashToReturn}</code></span>) : (<div></div>)}
                        <button href="javascript:void(0)" style={{ float: 'right' }} className="btn btn-primary btn-raised" disabled={!this.isValidToCheckout()} >Checkout</button>
                        <button href="javascript:void(0)" style={{ float: 'right' }} className="btn btn-danger btn-raised" onClick={this.clearAll}>Clear</button>
                    </div>
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

    onCashRecieved(event) {
        var cashRecieved = parseFloat(event.target.value);

        if (isNaN(cashRecieved)) {
            return;
        }

        if (this.state.totalAmount === 0) {
            return;
        }
        let cashToReturn = cashRecieved - parseFloat(this.state.sum);

        this.setState({ cashRecieved: cashRecieved, cashToReturn: cashToReturn.toFixed(2) });
    }

    isValidToCheckout() {

        if (this.context.store.getState().checkout.selectedOrders.length === 0) {
            return false;
        }

        let cashToReturn = this.state.cashRecieved - parseFloat(this.state.sum);


        if (cashToReturn < 0) {
            return false;
        }

        return true;
    }

    clearAll(){
        this.context.store.dispatch(onClearStore())
    }
}
Payment.contextTypes = {
    store: React.PropTypes.object
}


export default Payment;
