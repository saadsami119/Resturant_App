﻿import React from "react";
import Menu from "./menu/menu.jsx";
import Order from "./order/orders.jsx";
import Payment from "./payment/payment.jsx";


class Checkout extends React.Component {
    render() {
        return (

            <div className="row div-full-height">

                <div className="col-sm-4 div-full-height">
                    <Menu></Menu>
                </div>

                <div className="col-sm-4 div-full-height">                   
                        <Order></Order>
                </div>

                <div className="col-sm-4 div-full-height">                   
                        <Payment></Payment>                   
                </div>
            </div>

        );
    }
}

export default Checkout;