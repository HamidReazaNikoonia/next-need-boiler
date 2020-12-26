// #region Global Imports
import React from "react";
// #endregion Global Imports

import LOGO from "@Static/svg/logo.svg";

import { cx } from "@Utils/index";

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlusSquare, faBell } from "@fortawesome/free-solid-svg-icons";
import { DropDown } from "@Components";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

const SideBarMenu: React.FC = ({ t, i18n }) => {
    return (
        <div dir="rtl" className="flex flex-col pt-6  w-full">
            {/* logo */}
            <div className="flex justify-between pr-5">
                <div className="logo ">
                    <LOGO />
                </div>
                <div
                    style={{ flex: 0.43 }}
                    dir="rtl"
                    className="flex justify-between"
                >
                    <FontAwesomeIcon className={styles.faIcons} icon={faCog} />
                    <FontAwesomeIcon
                        className={styles.faIcons}
                        icon={faPlusSquare}
                    />
                    <FontAwesomeIcon className={styles.faIcons} icon={faBell} />
                </div>
            </div>

            {/* user avatar and dropDown */}
            <div className="flex w-full pt-8 pr-5">
                <DropDown
                    id="someid"
                    onSelect={(id, item) => console.log(id)}
                    borderRadius="md"
                    bgColor="ligth-blue"
                />
            </div>

            {/* Menu List */}
            <div className="flex flex-col justify-center w-full pt-8">
                <ul className={styles.menuList}>
                    <li className={cx("relative", styles.active)}>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="#">درخواست ها</a>
                    </li>

                    <li>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="">پیشنهاد ها</a>
                    </li>

                    <li>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="">کسب و کار</a>
                    </li>

                    <li>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="#">مدیریت موضوعات</a>
                    </li>

                    <li>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="">مدیریت کاربران</a>
                    </li>

                    <li>
                        <FontAwesomeIcon
                            className={styles.faIcons}
                            icon={faCog}
                        />
                        <a href="">گزارشات</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default withTranslation("common")(SideBarMenu);
