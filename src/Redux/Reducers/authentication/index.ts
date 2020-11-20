// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IAuthentication } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IAuthentication.IStateProps = { };

type IMapPayload = IAuthentication.Actions.IMapPayload;

export const AuthenticationReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Authentication.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Authentication.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
