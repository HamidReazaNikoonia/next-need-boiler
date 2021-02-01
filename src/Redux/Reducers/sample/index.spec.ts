// #region Local Imports
import { IAction, ISample } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { SampleReducer } from ".";
// #endregion Local Imports

describe("Sample reducer", () => {
    it("should return the initial state", () => {
        expect(SampleReducer(
            undefined,
            {} as IAction<ISample.IStateProps>)
        ).toEqual({});
    });
});
