// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { RequestOrderActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("RequestOrder action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.RequestOrder.SetReducer
            },
        ];

        store.dispatch(RequestOrderActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            requestOrder: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.RequestOrder.ResetReducer
            },
        ];

        store.dispatch(RequestOrderActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
