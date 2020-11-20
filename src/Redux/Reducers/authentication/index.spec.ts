// #region Local Imports
import { IAction, IAuthentication } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { AuthenticationReducer } from ".";
// #endregion Local Imports

describe("Authentication reducer", () => {
    it("should return the initial state", () => {
        expect(AuthenticationReducer(
            undefined,
            {} as IAction<IAuthentication.IStateProps>)
        ).toEqual({});
    });
});
