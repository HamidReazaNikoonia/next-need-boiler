// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Avatar } from "@Components";
// #endregion Local Imports

describe("Avatar", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Avatar />);
        expect(wrapper).toMatchSnapshot();
    });
});
