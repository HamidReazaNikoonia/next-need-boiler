/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { cx } from "@Utils";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IInput } from "./Input";
// #endregion Interface Imports

export const Input = React.forwardRef<HTMLInputElement, IInput.IProps>(
    function Input(props, ref) {
        const {
            size = "xs",
            type = "text",
            variant = "primary",
            className,
            inputDirection = "rtl",
            isFullWidth = true,
            muted,
            id,
            label,
            isDisabled,
            warning,
            warningText,
            ...rest
        } = props;

        const ISize = `input-${size}`;
        const IVariant = `input-${variant}`;
        const clx = cx(
            className,
            isFullWidth && "w-full",
            isDisabled && styles["input-disable"],
            warning && styles["input-warning"],
            muted && "text-muted",
            styles.input,
            styles[ISize],
            styles[IVariant]
        );
        return (
            <div dir="rtl" className={styles.inputContainer}>
                <label
                    className="block text-sm text-sub-text-color mb-1"
                    htmlFor={id}
                >
                    {label}
                </label>
                <input
                    {...rest}
                    dir={inputDirection}
                    type={type}
                    id={id}
                    ref={ref}
                    className={clx}
                />
                {warning && warningText ? (
                    <span className={styles.warningText}> {warningText} </span>
                ) : null}
            </div>
        );
    }
);
