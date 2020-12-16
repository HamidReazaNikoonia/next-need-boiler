// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Card } from "@Components";
// #endregion Local Imports

describe("Card", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Card />);
        expect(wrapper).toMatchSnapshot();
    });
});
