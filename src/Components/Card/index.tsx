// #region Global Imports
import React, { useContext } from "react";

// #endregion Global Imports

// #region Local Imports
import { cx } from "@Utils/index";
import { ThemeContext } from "../../context/ThemeContext";
// #endregion Local Imports

// #region Interface Imports
import { ICard } from "./Card";
// #endregion Interface Imports

export const Card: React.FunctionComponent<ICard.IProps> = (
    props: ICard.IProps
) => {
    const {
        className,
        children,
        colored = false,
        rounded = "md",
        ...other
    } = props;
    const { card } = useContext(ThemeContext);

    const baseStyle = card.base;
    const uncoloredStyle = card.default;

    const cls = cx(
        baseStyle,
        !colored && uncoloredStyle,
        className,
        `rounded-${rounded}`
    );

    return (
        <div className={cls} {...other}>
            {children}
        </div>
    );
};
