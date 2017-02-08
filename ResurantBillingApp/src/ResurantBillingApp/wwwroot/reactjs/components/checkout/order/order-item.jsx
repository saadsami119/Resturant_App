import React from "react";

class OrderItem extends React.Component{
    render(){
        return (
            <div className="well well-sm">
              {this.props.name}  {this.props.price}
        </div>);
    }
}

export default OrderItem;
