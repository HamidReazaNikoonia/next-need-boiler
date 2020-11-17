// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { DropDown } from "@Components";
// #endregion Local Imports

describe("DropDown", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<DropDown />);
        expect(wrapper).toMatchSnapshot();
    });
});
