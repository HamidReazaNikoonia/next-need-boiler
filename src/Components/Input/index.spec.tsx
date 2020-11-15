// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Input } from "@Components";
// #endregion Local Imports

describe("Input", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Input />);
        expect(wrapper).toMatchSnapshot();
    });
});
