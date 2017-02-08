import React from "react";
import Menu from "./menu/menu.jsx";
import Order from "./order/orders.jsx";


class Checkout extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <Menu></Menu>
                </div>

                <div className="col-md-7">
                    <Order></Order>
                </div>
            </div>
            );
    }
}

export default Checkout;