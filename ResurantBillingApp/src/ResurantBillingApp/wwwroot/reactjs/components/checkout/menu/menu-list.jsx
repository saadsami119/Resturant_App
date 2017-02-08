import React from "react";
import MenuItem from "./menu-item.jsx";


class MenuItemList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {menus : []};
    }  

    componentDidMount(){
        this.setState({menus : []} );
    }


    render(){
        this.context.store.subscribe(() => {  
            
            this.setState({menus : this.context.store.getState().checkout.menus});                       
        });

        return(<div className="div-large">
                 { this.createMenuList() }
               </div>);
    }
    
    createMenuList(){     
        return(this.state.menus.map((menu,index)=>{
            return  ( <MenuItem key={menu.id} name={menu.name} price={menu.price}></MenuItem>)}))
            }
    }
 

MenuItemList.contextTypes={
     store : React.PropTypes.object
}

export default MenuItemList;
