import React from "react";
import axios from 'axios';
import MenuItemList from "./menu-list.jsx";
import {onMenuListFetched} from "../../../actions/checkout/actions.jsx";


class Menu extends React.Component{
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("/api/menu")     
            .then(response => {              
                this.context.store.dispatch(onMenuListFetched(response.data));
            });
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="well">
                    <legend>Menus</legend>

                     <div className="form-group label-floating">
                        <label  className="control-label">Search</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div>
                        <MenuItemList></MenuItemList>
                    </div>
                </div>
            </div>
            );
    }

}

Menu.contextTypes={
    store : React.PropTypes.object
}


export default Menu;
