import React from "react";
import axios from 'axios';
import MenuItemList from "./menu-list.jsx";
import MenuSearch from "./menu-search.jsx";
import { onMenuListFetched } from "../../../actions/checkout/menu-actions.jsx";

class Menu extends React.Component {

    componentDidMount() {
        axios.get("/api/menu")
            .then(response => {
                this.context.store.dispatch(onMenuListFetched(response.data));
            });
    }

    render() {
        return (
            <div className="container-fluid div-full-height">
                <div className="well div-full-height">
                   
                    <div style={{ height: '5%' }}>
                        <legend>Menu</legend>
                    </div>

                    <div style={{ height: '5%' }}>
                       <MenuSearch></MenuSearch>
                      
                    </div>
                 
                    <div className="list-box" style={{ height: '90%' }}>                      
                        <MenuItemList></MenuItemList>                      
                    </div>

                </div>
            </div>
        );
    }

}

Menu.contextTypes = {
    store: React.PropTypes.object
}


export default Menu;
