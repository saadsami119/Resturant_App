import React from "react";
import axios from 'axios';
import MenuItemList from "./menu-list.jsx";
import { onMenuListFetched } from "../../../actions/checkout/actions.jsx";


class Menu extends React.Component {

    constructor(props) {
        super(props); 
        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.searchMenu = this.searchMenu.bind(this);      
    }

    componentDidMount() {         
         this.setState({ searchMenuString: '' });

        axios.get("/api/menu")
            .then(response => {
                this.context.store.dispatch(onMenuListFetched(response.data));
            });
    }

    render() {
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                    <legend>Menus</legend>

                    <div className="form-group form-group-sm label-floating input-group">
                        <label className="control-label">Search</label>
                        <input type="text" className="form-control" onChange={this.onSearchTextChanged}></input>
                        <div className="input-group-btn">
                            <button className="btn btn-xs btn-primary" onClick={this.searchMenu} >
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>

                    <MenuItemList></MenuItemList>

                </div>
            </div>
        );
    }

    searchMenu() {

         axios.get("/api/menu/"+this.state.searchMenuString)
            .then(response => {
                this.context.store.dispatch(onMenuListFetched(response.data));
            });            
    }

    onSearchTextChanged(event) {
        this.setState({ searchMenuString: event.target.value});
    }

}

Menu.contextTypes = {
    store: React.PropTypes.object
}


export default Menu;
