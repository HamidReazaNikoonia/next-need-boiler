// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { RequestOrderActions } from "@Actions";
import { ReduxNextPageContext, IRequestOrder } from "@Interfaces";
import DashboardMainLayout from "@Layouts/Dashboard/MainLayout";
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

export const RequestOrder: NextPage<
    IRequestOrder.IProps,
    IRequestOrder.InitialProps
> = ({ t, i18n }) => {
    const requestOrder = useSelector((state: IStore) => state.requestOrder);
    const dispatch = useDispatch();

    return (
        <section id="requestOrder w-full">
            <DashboardMainLayout>hello</DashboardMainLayout>
        </section>
    );
};

RequestOrder.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IRequestOrder.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(RequestOrder);
