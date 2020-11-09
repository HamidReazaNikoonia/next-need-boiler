/* eslint-disable no-underscore-dangle */
// #region Global Imports
import React from "react";
import styled, { keyframes } from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { VisuallyHidden } from "@Components";
import _styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { ISpinner } from "./Spinner";
// #endregion Interface Imports

import { cx } from "../../utilis";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const Spinner: React.FunctionComponent<ISpinner.IProps> = (
    props: ISpinner.IProps
) => {
    // define used props
    const {
        label = "Loading...",
        thickness = "2px",
        speed = "0.45s",
        color,
        emptyColor = "transparent",
        styles,
        className,
        ...rest
    } = props;

    const _className = cx("spinner", _styles.spinners);

    const Section = styled.div`
        display: inline-block;
        border-color: red;
        border-style: solid;
        border-radius: 99999px;
        border-width: ${thickness};
        border-bottom-color: ${emptyColor};
        border-left-color: ${emptyColor};
        animation: ${rotate} ${speed} linear infinite;
        color: ${color};
    `;

    return (
        <Section style={{ ...styles }} className={_className} {...rest}>
            {label && <VisuallyHidden>{label}</VisuallyHidden>}
        </Section>
    );
};
