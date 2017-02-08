import { combineReducers } from 'redux'
import AccountReducer from './account/reducer.jsx'
import CheckoutReducer from './checkout/reducer.jsx'

const AppReducer = combineReducers({
    account : AccountReducer,
    checkout : CheckoutReducer
});

export default AppReducer;
