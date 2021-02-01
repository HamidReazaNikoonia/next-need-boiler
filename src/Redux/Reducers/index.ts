// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AuthenticationReducer } from "./authentication";
import { RequestOrderReducer } from "./requestOrder";
import { SampleReducer } from "./sample";
// #endregion Local Imports

export default combineReducers({
    sample: SampleReducer,
    requestOrder: RequestOrderReducer,
    authentication: AuthenticationReducer,
    home: HomeReducer,
});
