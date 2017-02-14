import React from "react";
import { onMenuSelected } from "../../../actions/checkout/menu-actions.jsx";

class MenuItem extends React.Component {
    render() {
        return (

            <div className="list-group-item">
                <div className="row-content">
                    <div className="least-content"><h4>${this.props.price}</h4></div>

                    <button className="btn btn-info menu-btn" onClick={() => { this.context.store.dispatch(onMenuSelected(this.props.id)) }}>{this.props.name}</button>


                    <p className="list-group-item-text"><em>{this.props.description}</em></p>
                </div>
                <div className="list-group-separator"></div>
            </div>


        );

    }
}

MenuItem.contextTypes = {
    store: React.PropTypes.object
}

export default MenuItem;
