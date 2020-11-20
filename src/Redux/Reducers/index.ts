// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AuthenticationReducer } from "./authentication";
// #endregion Local Imports

export default combineReducers({
    authentication: AuthenticationReducer,
    home: HomeReducer,
});
