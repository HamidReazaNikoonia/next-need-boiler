// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { ToggleSwitch } from "@Components";
// #endregion Local Imports

describe("ToggleSwitch", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<ToggleSwitch />);
        expect(wrapper).toMatchSnapshot();
    });
});
