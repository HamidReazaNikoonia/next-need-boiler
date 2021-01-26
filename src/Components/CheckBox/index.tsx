// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { cx } from "@Utils/index";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { ICheckBox } from "./CheckBox";
// #endregion Interface Imports

export const CheckBox: React.FC<any> = React.forwardRef(
    (
        {
            id,
            inline = false,
            disabled = false,
            isValid = false,
            feedbackTooltip = false,
            feedback,
            name,
            onChange,
            className,
            type = "checkbox",
            label,
            children,
            ...props
        }: ICheckBox.IProps,
        ref
    ) => {
        const [checked, setChecked] = React.useState(true);
        return (
            <div className="flex items-center" {...props}>
                <input
                    className={cx(className, styles.checkBox, "ml-3")}
                    ref={ref}
                    onChange={() => setChecked(!checked)}
                    type={type}
                    checked={checked}
                    disabled={disabled}
                    name={name}
                    id={id}
                />
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            </div>
        );
    }
);

export default CheckBox;
