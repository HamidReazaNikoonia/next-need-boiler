// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Hamid } from "@Components";
// #endregion Local Imports

describe("Hamid", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Hamid />);
        expect(wrapper).toMatchSnapshot();
    });
});
