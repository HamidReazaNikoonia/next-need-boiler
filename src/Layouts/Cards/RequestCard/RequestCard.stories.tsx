// #region Global Imports
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
// import { boolean } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
/* eslint-enable import/no-extraneous-dependencies */
// #endregion Global Imports

// #region Local Imports
import { RequestCard } from "./index";
// #endregion Local Imports

export default {
    component: RequestCard,
    title: "RequestCard",
};

export const Default = () => (
    <div>
        <RequestCard styles="" className="" bg="primary">
            Hello Buttons
        </RequestCard>
    </div>
);
