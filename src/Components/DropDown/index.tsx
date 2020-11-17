/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// #region Global Imports
import React, { useState } from "react";
// #endregion Global Imports

// #region Local Imports
// Util
import { cx } from "@Utils";
import { optionsKnob } from "@storybook/addon-knobs";
import styles from "./styles.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IDropDown } from "./DropDown";
// #endregion Interface Imports

const DropDownLabel: React.FC<IDropDown.DropDownLabelProps> = ({
    children,
    id,
}) => (
    <label dir="rtl" id={id} className={styles.label}>
        {children}
    </label>
);

const SelectedItemComp = ({ data }) => (
    <div className="flex items-center text-gray-900  cursor-default select-none">
        {data.avatar && (
            <img
                src={data.avatar ? data.avatar.src : ""}
                alt={data.avatar ? data.avatar.alt : ""}
                className="flex-shrink-0 h-6 w-6 rounded-full ml-3"
            />
        )}
        <span className="font-normal text-sub-text-color w-full text-xxs block truncate">
            {data.label}
        </span>
    </div>
);

const DropDownArrowIcon: React.FC = () => (
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
        >
            <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

const DropDownOptionItem: React.FC<IDropDown.DropdownItem> = ({
    data,
    hasScroll,
    clickHandler,
}) => (
    <li
        onClick={() => clickHandler(data.id, data)}
        id={data.id}
        dir="rtl"
        role="option"
        className={styles.OptionItem}
    >
        <div className="flex items-center">
            {data.avatar && (
                <img
                    src={data.avatar ? data.avatar.src : ""}
                    alt={data.avatar ? data.avatar.alt : ""}
                    className="flex-shrink-0 h-6 w-6 rounded-full ml-3"
                />
            )}
            <span className="font-normal text-sub-text-color text-xxs block truncate">
                {data.label}
            </span>
        </div>

        {data.selected && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        )}
    </li>
);

const DropDownOptions: React.FC<IDropDown.DropdownItem[]> = ({
    options,
    hasScroll,
    clickHandler,
}) => (
    <div
        className={cx(
            "absolute w-full  bg-white shadow-sm",
            hasScroll && styles.scroll
        )}
    >
        <ul
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className={cx(styles.options, "sm:text-sm sm:leading-5 max-h-56")}
        >
            {options.map(option => (
                <DropDownOptionItem clickHandler={clickHandler} data={option} />
            ))}
        </ul>
    </div>
);

export const DropDown: React.FunctionComponent<IDropDown.IProps> = (
    props: IDropDown.IProps
) => {
    const {
        label,
        placeHolder = "لطفا این فیلد را وارد کنید",
        id,
        options,
        hasScroll = true,
        selectedItemProps = null,
        onSelect,
    } = props;

    // Keep track of whether the dropdown is open or not.
    const [isActive, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(selectedItemProps);

    const clickHandler = (id, item) => {
        setActive(false);
        setSelectedItem(item);
        onSelect(id, item);
    };
    return (
        <div>
            <DropDownLabel id={id}>{label}</DropDownLabel>

            <div className="relative">
                {/*  Toggle the dropdown if the button is clicked */}
                <span
                    role="button"
                    onClick={() => setActive(!isActive)}
                    className="inline-block w-full rounded-md shadow-sm"
                >
                    <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        className={cx(
                            styles.dropDownButton,
                            "sm:text-sm sm:leading-5 leading-2 focus:shadow-outline-blue",
                            isActive && styles.borderRadiusNone
                        )}
                    >
                        {typeof selectedItem === "object" &&
                        selectedItem !== null ? (
                            <SelectedItemComp data={selectedItem} />
                        ) : (
                            <span className={styles.placeHolder}>
                                {placeHolder}
                            </span>
                        )}

                        <DropDownArrowIcon />
                    </button>
                </span>

                {isActive && (
                    <DropDownOptions
                        clickHandler={clickHandler}
                        hasScroll={hasScroll}
                        options={options}
                    />
                )}
            </div>
        </div>
    );
};
