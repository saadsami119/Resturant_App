import React from "react";
import Menu from "./menu/menu.jsx";
import Order from "./order/orders.jsx";
import Payment from "./payment/payment.jsx";


class Checkout extends React.Component {
    render() {
        return (
            <div className="row div-full-height">
                <div className="col-md-4 div-full-height" >
                    <Menu></Menu>
                </div>
                <div className="col-md-6 div-full-height">
                   <div className="div-half-height" style={{marginBottom:20}} >
                       <Order></Order>
                    </div>
                    <div className="div-half-height">
                        <Payment></Payment>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Checkout;