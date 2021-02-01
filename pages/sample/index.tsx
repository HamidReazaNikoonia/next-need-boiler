// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { SampleActions } from "@Actions";
import "./style.scss";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, ISample } from "@Interfaces";
// #endregion Interface Imports

export const Sample: NextPage<ISample.IProps, ISample.InitialProps> = ({
    t,
    i18n,
}) => {
    const sample = useSelector((state: IStore) => state.sample);
    const dispatch = useDispatch();

    return <section id="sample">Sample Page</section>;
};

Sample.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ISample.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Sample);
