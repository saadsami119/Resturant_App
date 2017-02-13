import React from "react";
import axios from 'axios'
import { onMenuListFetched } from "../../../actions/checkout/actions.jsx";


class MenuSearch extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.searchMenu = this.searchMenu.bind(this);
        this.clearSearchText = this.clearSearchText.bind(this);
        this.state = { searchMenuString: '' };
    }

    render() {
        return (<div >
            <div className="form-group label-floating input-group">
                <label className="control-label">Search</label>
                <input type="text" className="form-control" value={this.state.searchMenuString} onChange={this.onSearchTextChanged}></input>
                <div className="input-group-btn">
                    <button className="btn btn-xs btn-primary" onClick={this.searchMenu} >
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                    <button className="btn btn-xs btn-danger" onClick={this.clearSearchText} >
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </div>
            </div>
        </div>);
    }

    searchMenu() {
        axios.get("/api/menu/" + this.state.searchMenuString)
            .then(response => {
                this.context.store.dispatch(onMenuListFetched(response.data));
            });
    }

    onSearchTextChanged(event) {
        this.setState({ searchMenuString: event.target.value });
    }

    clearSearchText() {
        this.setState({ searchMenuString: '' });
    }

}

MenuSearch.contextTypes = {
    store: React.PropTypes.object
}

export default MenuSearch;