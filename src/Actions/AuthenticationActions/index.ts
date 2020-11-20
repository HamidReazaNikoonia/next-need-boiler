// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const AuthenticationActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Authentication.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Authentication.ResetReducer
    })
};
