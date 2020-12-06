// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { RequestCard } from "./index";
// #endregion Local Imports

describe("RequestCard", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<RequestCard />);
        expect(wrapper).toMatchSnapshot();
    });
});
