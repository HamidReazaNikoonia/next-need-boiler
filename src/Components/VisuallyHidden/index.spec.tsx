// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { VisuallyHidden } from "@Components";
// #endregion Local Imports

describe("VisuallyHidden", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<VisuallyHidden />);
        expect(wrapper).toMatchSnapshot();
    });
});
