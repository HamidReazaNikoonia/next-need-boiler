// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ISample } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ISample.IStateProps = { };

type IMapPayload = ISample.Actions.IMapPayload;

export const SampleReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Sample.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Sample.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
