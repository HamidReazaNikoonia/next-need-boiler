// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Spinner } from "@Components";
// #endregion Local Imports

describe("Spinner", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});
