import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppStore from "./store/app-store.jsx";
import AppRouter from "./router/app-router.jsx";

const store = AppStore();

class App extends React.Component{
    render(){
        return(
            <div>
                <Provider store={store}>
                    <AppRouter/>
                </Provider>
            </div>
         );
    }
}
 
ReactDOM.render(<div><App/></div> , document.getElementById('app'));