// #region Global Imports
import React from "react";
// #endregion Global Imports

import LOGO from "@Static/svg/logo.svg";

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
        <div dir="rtl" className="flex flex-col pt-6 pr-5 w-full">
            {/* logo */}
            <div className="flex justify-between">
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
            <div className="flex w-full pt-8">
                <DropDown
                    id="someid"
                    onSelect={(id, item) => console.log(id)}
                    borderRadius="md"
                    bgColor="ligth-blue"
                />
            </div>
        </div>
    );
};

export default withTranslation("common")(SideBarMenu);
