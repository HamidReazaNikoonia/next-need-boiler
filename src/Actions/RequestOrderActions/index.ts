// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const RequestOrderActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.RequestOrder.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.RequestOrder.ResetReducer
    })
};
