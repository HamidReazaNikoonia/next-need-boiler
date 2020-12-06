// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// #endregion Global Imports

// #region Local Imports
import { Input } from "@Components";
// #endregion Local Imports

// configure({ adapter: new Adapter() });

describe("Input", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Input />);
        expect(wrapper).toMatchSnapshot();
    });
});
