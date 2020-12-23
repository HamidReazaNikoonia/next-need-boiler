// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AuthenticationReducer } from "./authentication";
import { RequestOrderReducer } from "./requestOrder";
// #endregion Local Imports

export default combineReducers({
    requestOrder: RequestOrderReducer,
    authentication: AuthenticationReducer,
    home: HomeReducer,
});
