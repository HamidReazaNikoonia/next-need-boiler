// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IRequestOrder } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IRequestOrder.IStateProps = { };

type IMapPayload = IRequestOrder.Actions.IMapPayload;

export const RequestOrderReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.RequestOrder.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.RequestOrder.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
