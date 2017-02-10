import React from "react";
import { onMenuSelected } from "../../../actions/checkout/actions.jsx";

class MenuItem extends React.Component {
    render() {
        return (
            <div>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row-content">
                            <div className="least-content"><strong>${this.props.price}</strong></div>
                            <h4 className="list-group-item-heading">
                                <a onClick={() => { this.context.store.dispatch(onMenuSelected(this.props.id)) }}
                                    href="javascript:void(0)" className="no-space">{this.props.name}</a>
                            </h4>

                            <p className="list-group-item-text">{this.props.description}</p>
                        </div>
                    </div>
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
