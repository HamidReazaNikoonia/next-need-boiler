// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// import { useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
// import {
//     Container,
//     Top,
//     TopText,
//     Middle,
//     MiddleLeft,
//     MiddleLeftButtons,
//     MiddleRight,
//     Apod,
//     ApodButton,
// } from "@Styled/Home";
// import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
// import { Heading, LocaleButton, Hamid, Spinner } from "@Components";
// import { Button } from "@Components/Basic/Button";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    // const home = useSelector((state: IStore) => state.home);
    // const dispatch = useDispatch();

    // const renderLocaleButtons = (activeLanguage: string) =>
    //     ["en", "es", "tr"].map(lang => (
    //         <LocaleButton
    //             key={lang}
    //             lang={lang}
    //             isActive={activeLanguage === lang}
    //             onClick={() => i18n.changeLanguage(lang)}
    //         />
    //     ));

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
