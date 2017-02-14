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
            cashRecieved: ''
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
            let cashToReturn = parseFloat(this.state.cashRecieved) - sum;

            this.setState({
                salesTax: parseFloat(taxAmount).toFixed(2),
                totalAmount: parseFloat(totalAmount).toFixed(2),
                sum: sum.toFixed(2),
                cashToReturn: cashToReturn.toFixed(2)
            })
        });



        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <div style={{ height: '5%' }}>
                        <legend>Payment</legend>
                    </div>

                    <div style={{ height: '5%' }}>
                        <small><em>selected by the Customer</em></small>
                    </div>

                    <hr></hr>

                    <div style={{ height: '90%' }}>

                        <div className="div-full-height" >
                            <div className="list-group">
                                <div className="list-group-item">
                                    <div className="row-content" style={{ minHeight: 40 }}>
                                        <div className="least-content">
                                            <h4>${this.state.totalAmount}</h4>
                                        </div>
                                        <h4 className="text-primary">Total Amount </h4>
                                    </div>
                                </div>
                                <div className="list-group-separator"></div>

                                <div className="list-group-item">
                                    <div className="row-content" style={{ minHeight: 40 }}>
                                        <div className="least-content">
                                            <h4>${this.state.salesTax}</h4>
                                        </div>
                                        <h4 className="text-primary">Sales Tax (19.5%)</h4>
                                    </div>
                                </div>
                                <div className="list-group-separator"></div>

                                <div className="list-group-item">
                                    <div className="row-content" style={{ minHeight: 40 }}>
                                        <div className="least-content">
                                            <h4 className="text-info" >${this.state.sum}</h4>
                                        </div>
                                        <h4 className="text-info">Sum</h4>
                                    </div>
                                </div>
                                <div className="list-group-separator"></div>


                                <div className="list-group-item">
                                    <div className="row-content" style={{ minHeight: 40 }}>
                                        <div className="least-content">
                                            <div className="form-group" style={{ padding: 0, margin: 0, width: 90 }}>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><h4>$</h4></span>
                                                    <input type="text" className="form-control" placeholder="0.00" style={{ fontSize: 18,textAlign:'right' }} value={this.state.cashRecieved} onChange={this.onCashRecieved} ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="text-primary">Cash Revcieved</h4>
                                        <p className="list-group-item-text"><em>{this.isValidToCheckout() ? (<span className="help-block">Cash to Reurn <code>{this.state.cashToReturn}</code></span>) : (<span></span>)}</em></p>
                                    </div>
                                </div>
                                <div className="list-group-separator"></div>

                            </div>

                            <button href="javascript:void(0)" style={{ float: 'right' }} className="btn btn-primary btn-raised" disabled={!this.isValidToCheckout()} >Checkout</button>
                            <button href="javascript:void(0)" style={{ float: 'right' }} className="btn btn-danger btn-raised" onClick={this.clearAll}>Clear</button>
                        </div>

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

         if (event.target.value === "") {
            this.setState({ cashRecieved: "" });
            return;
        }

        var reg = new RegExp(/^-?\d+\.?\d{0,2}$/);                
        if(!reg.test(event.target.value)){            
            return;
        }

          if (this.state.totalAmount === 0) {
            return;
        }        

        let cashToReturn = parseFloat(event.target.value) - this.state.sum;
        this.setState({ cashRecieved: event.target.value, cashToReturn: cashToReturn.toFixed(2) });
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

    clearAll() {
        this.context.store.dispatch(onClearStore())
        this.setState({ cashRecieved: '', cashToReturn: 0 });
    }
}
Payment.contextTypes = {
    store: React.PropTypes.object
}


export default Payment;
