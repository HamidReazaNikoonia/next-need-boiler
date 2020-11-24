// #region Global Imports
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
// import { boolean } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
/* eslint-enable import/no-extraneous-dependencies */
// #endregion Global Imports

// #region Local Imports
import { Button } from "./index";
// #endregion Local Imports

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <div>
        <Button styles="" className="" variant="primary">
            Hello Buttons
        </Button>
    </div>
);
