/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
// #region Global Imports
import React, { useState } from "react";
// #endregion Global Imports

// #region Local Imports
import { cx } from "@Utils";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IToggleSwitch } from "./ToggleSwitch";
// #endregion Interface Imports

export const ToggleSwitch: React.FunctionComponent<IToggleSwitch.IProps> = (
    props: IToggleSwitch.IProps
) => {
    const { defaultChecked, text, onToggleChange, Name, id, disabled } = props;

    const [checked, setChecked] = useState<string | boolean | undefined>(
        defaultChecked
    );
    const [Text] = useState<string>(text);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.value);
        if (onToggleChange) onToggleChange(e);
    }
    return (
        <div className={cx(styles.toggle, styles["toggle-switch"])}>
            <input
                type="checkbox"
                name={Name}
                className={styles["toggle-switch-checkbox"]}
                id={id}
                defaultChecked={checked}
                onChange={onChange}
            />
            {id ? (
                <label className={styles["toggle-switch-label"]} htmlFor={id}>
                    <span
                        className={
                            disabled
                                ? cx(
                                      styles["toggle-switch-inner"],
                                      styles["toggle-switch-disabled"]
                                  )
                                : styles["toggle-switch-inner"]
                        }
                        data-yes={Text[0]}
                        data-no={Text[1]}
                    />
                    <span
                        className={
                            disabled
                                ? cx(
                                      styles["toggle-switch-switch"],
                                      styles["toggle-switch-disabled"]
                                  )
                                : styles["toggle-switch-switch"]
                        }
                    />
                </label>
            ) : null}
        </div>
    );
};
