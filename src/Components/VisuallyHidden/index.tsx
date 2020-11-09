// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { VisuallyHiddenContainer } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IVisuallyHidden } from "./VisuallyHidden";
// #endregion Interface Imports

export const VisuallyHidden: React.FunctionComponent<IVisuallyHidden.IProps> = () => {
    return <VisuallyHiddenContainer />;
};
