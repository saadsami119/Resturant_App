import { createStore } from "redux";
import AppReducer from "../reducer/app-reducer.jsx";

const AppStore = () => {     
    return createStore(AppReducer);
}

export default AppStore;