// #region Global Imports
import React from "react";
import { NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import DashboardMainLayout from "@Layouts/Dashboard/MainLayout";
// import { IStore } from "@Redux/IStore";
// import { SampleActions } from "@Actions";
import { ISample } from "@Interfaces";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

export const Profile: NextPage<ISample.IProps, ISample.InitialProps> = ({
    t,
    i18n,
}) => {
    // const sample = useSelector((state: IStore) => state.sample);
    // const dispatch = useDispatch();

    return (
        <section id="profile">
            <DashboardMainLayout>profile</DashboardMainLayout>
        </section>
    );
};

// Sample.getInitialProps = async (
//     ctx: ReduxNextPageContext
// ): Promise<ISample.InitialProps> => {
//     return { namespacesRequired: ["common"] };
// };

export default withTranslation("common")(Profile);
