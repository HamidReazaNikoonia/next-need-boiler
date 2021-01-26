// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { CheckBox } from "@Components";
// #endregion Local Imports

describe("CheckBox", () => {
    it("should match snapshot", () => {
        const wrapper = mount(
            <CheckBox id="test" title="title" label="label" />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
