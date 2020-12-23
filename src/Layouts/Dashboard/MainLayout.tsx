// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

export const DashboardMainLayout: NextPage = ({ t, i18n, children }) => {
    return (
        <section
            id="dashboard-main-layout-container "
            className="w-full flex flex-row justify-between"
        >
            <div className="container flex justify-center items-center w-5/6 bg-white p-6 h-screen">
                <div className="rounded-md w-full flex h-full bg-ligth-blue">
                    {children}
                </div>
            </div>
            <div
                className="side-menu w-1/6 bg-white h-screen"
                style={{ maxWidth: "300px" }}
            >
                Menu
            </div>
        </section>
    );
};

export default withTranslation("common")(DashboardMainLayout);
