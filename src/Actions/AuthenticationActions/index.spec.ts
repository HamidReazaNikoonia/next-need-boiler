// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { AuthenticationActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Authentication action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Authentication.SetReducer
            },
        ];

        store.dispatch(AuthenticationActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            authentication: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Authentication.ResetReducer
            },
        ];

        store.dispatch(AuthenticationActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
