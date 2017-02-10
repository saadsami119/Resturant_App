import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppStore from "./store/app-store.jsx";
import AppRouter from "./router/app-router.jsx";

const store = AppStore();

class App extends React.Component{
    render(){
        return(
                <Provider store={store}>
                    <AppRouter/>
                </Provider>            
         );
    }
}
 
ReactDOM.render(<App/> , document.getElementById('app'));