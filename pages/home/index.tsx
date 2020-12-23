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
import { ToggleSwitch, Card, Avatar } from "@Components";
import CardBody from "@Components/Card/CardBody";
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
import ProviderCard from "../../src/Layouts/Cards/ProviderCard";
// import { Button } from "@Components/Basic/Button";
// #endregion Local Imports

// #region Interface Imports
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

    const onToggleChange = event => {
        console.log(event.target.checked);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <div className=" w-1/1 px-24">
                {/* <Input
                    warningText="لطفا نام خود را کامل وارد کنید"
                    id="hey"
                    label="نام"
                    placeholder="نام خود را وارد کنید"
                /> */}

                {/*
                <DropDown
                    id="someid"
                    label="نام"
                    onSelect={(id, item) => console.log(id)}
                    options={[
                        {
                            id: "1",
                            label: "گزینه اول",
                            selected: true,
                            // avatar: {
                            //     alt: "hamid",
                            //     src:
                            //         "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
                            // },
                        },
                        {
                            id: "2",
                            label: "گزینه دوم",
                            selected: true,
                            // avatar: {
                            //     alt: "hamid",
                            //     src:
                            //         "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
                            // },
                        },
                    ]}
                />
                */}

                {/* <ToggleSwitch
                    id="id"
                    defaultChecked={false}
                    disabled={false}
                    text={["Yes", "No"]}
                    onToggleChange={onToggleChange}
                /> */}
                {/* <ProductCard /> */}
                <ProviderCard />
            </div>
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
