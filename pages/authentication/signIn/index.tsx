// #region Global Imports
import React from "react";
import { NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
// import { IStore } from "@Redux/IStore";
// import { AuthenticationActions } from "@Actions";
import { ReduxNextPageContext, IAuthentication } from "@Interfaces";
import { cx } from "@Utils/index";
import { Input, CheckBox } from "@Components";
import { Button } from "@Components/Basic/Button";
import GoogleIcon from "@Static/svg/icons-google.svg";
import FBIcon from "@Static/svg/icons-facebook.svg";
import SVG from "@Static/svg/auth-signin.svg";
import LOGO from "@Static/svg/logo.svg";
import styles from "./style.module.scss";

// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

export const AuthenticationSignIn: NextPage<
    IAuthentication.IProps,
    IAuthentication.InitialProps
> = ({ t, i18n }) => {
    // const authentication = useSelector((state: IStore) => state.authentication);
    // const dispatch = useDispatch();

    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div
                className={cx("absolute hidden md:block z-0", styles.svg)}
                id="svg"
            >
                <SVG className="max-w-lg" />
            </div>
            <div className="w-full z-20 flex flex-col md:flex-row items-center justify-around px-5">
                <div
                    dir="rtl"
                    className={cx(
                        "w-2/3 md:w-1/3 flex flex-col text-right mx-auto md:mr-12 ",
                        styles.authCard
                    )}
                >
                    <span className="font-semibold text-xxl mb-5">
                        ورود و یا ثبت نام
                    </span>
                    <div
                        dir="rtl"
                        className="flex min-w-full flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
                    >
                        <div className="m-auto mb-2">
                            <LOGO className="w-12" />
                        </div>

                        <div>
                            <Input
                                id="mobile_number"
                                placeholder="+98 912 25 26 777"
                                inputDirection="ltr"
                                label="شماره همراه"
                                isFullWidth
                            />
                        </div>

                        <div className="mt-5">
                            <Input
                                id="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                inputDirection="rtl"
                                label="رمز عبور"
                                isFullWidth
                            />
                        </div>

                        <div className="flex justify-between mt-6">
                            <CheckBox
                                id="condition"
                                label="من را به خاطر بسپار"
                            />

                            <span className=" cursor-pointer text-sm text-main-color font-light">
                                رمز عبور خود را فراموش کردید ؟
                            </span>
                        </div>

                        <div className="flex justify-end mt-8">
                            <Button
                                styles={{ maxWidth: "230px" }}
                                isFullWidth
                                variant="success"
                            >
                                ورود به حساب کاربری
                            </Button>
                        </div>

                        <div className="relative mt-16 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                <span className="bg-white font-semibold px-4 text-xs  uppercase">
                                    ورود یا ثبت نام با
                                </span>
                            </div>
                        </div>

                        <div
                            id="authButton"
                            className="flex mt-5 justify-between"
                        >
                            <Button
                                variant="info"
                                isFullWidth
                                rightIcon={<GoogleIcon />}
                                className="ml-6"
                                styles={{ justifyContent: "end" }}
                            >
                                گوگل
                            </Button>
                            <Button
                                variant="info"
                                isFullWidth
                                rightIcon={<FBIcon />}
                                styles={{ justifyContent: "end" }}
                            >
                                فیسبوک
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Authentication.getInitialProps = async (
//     ctx: ReduxNextPageContext
// ): Promise<IAuthentication.InitialProps> => {
//     return { namespacesRequired: ["common"] };
// };

export default withTranslation("common")(AuthenticationSignIn);
