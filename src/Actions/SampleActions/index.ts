// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const SampleActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Sample.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Sample.ResetReducer
    })
};
