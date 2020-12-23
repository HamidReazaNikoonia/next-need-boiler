// #region Local Imports
import { IAction, IRequestOrder } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { RequestOrderReducer } from ".";
// #endregion Local Imports

describe("RequestOrder reducer", () => {
    it("should return the initial state", () => {
        expect(RequestOrderReducer(
            undefined,
            {} as IAction<IRequestOrder.IStateProps>)
        ).toEqual({});
    });
});
