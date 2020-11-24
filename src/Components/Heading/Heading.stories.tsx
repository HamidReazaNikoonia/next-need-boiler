// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Heading } from "./index";

// #endregion Local Imports

export default {
    component: Heading,
    title: "Heading",
};

export const Default = () => (
    <div>
        <Heading text="Hello World" />
    </div>
);
