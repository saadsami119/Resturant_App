import React from "react";
import { Router, Route ,hashHistory , browserHistory } from 'react-router';
import Checkout from "../components/checkout/index.jsx";

class AppRouter extends React.Component{

    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Checkout} />
            </Router>
            );
      }
}

AppRouter.contextTypes={
    store : React.PropTypes.object
}

export default AppRouter;
