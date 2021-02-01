// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { SampleActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Sample action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Sample.SetReducer
            },
        ];

        store.dispatch(SampleActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            sample: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Sample.ResetReducer
            },
        ];

        store.dispatch(SampleActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
