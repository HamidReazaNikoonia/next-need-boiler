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
import { Input } from "@Components";
import { Button } from "@Components/Basic/Button";
import styles from "./style.module.scss";
import SVG from "../../public/static/svg/auth_svg.svg";
import LOGO from "../../public/static/svg/logo.svg";
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

export const Authentication: NextPage<
    IAuthentication.IProps,
    IAuthentication.InitialProps
> = ({ t, i18n }) => {
    // const authentication = useSelector((state: IStore) => state.authentication);
    // const dispatch = useDispatch();

    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-around px-5">
                <div className=" hidden md:block w-1/3 md:w-2/3 " id="svg">
                    <SVG className="max-w-lg" />
                </div>

                <div
                    dir="rtl"
                    className="w-2/3 md:w-1/3 flex flex-col text-right mx-auto md:mr-12 "
                >
                    <span className="mb-2"> ثبت نام در نیدرو </span>
                    <div
                        dir="rtl"
                        className="flex min-w-full flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
                    >
                        <div className="m-auto mb-12">
                            <LOGO className="w-12" />
                        </div>

                        <div>
                            <Input
                                placeholder="+98 912 25 26 777"
                                inputDirection="ltr"
                                label="شماره همراه"
                                isFullWidth
                            />
                        </div>

                        <div className="flex justify-between mt-8">
                            <Input
                                placeholder=" نام خود را وارد کنید"
                                label="نام"
                            />
                            <Input
                                placeholder="نام خانوادگی خود را وارد کنید"
                                label="نام خانوادگی"
                            />
                        </div>

                        <div className="mt-8">
                            <Input
                                placeholder="آدرس ایمیل خود را وارد کنید"
                                inputDirection="ltr"
                                label=" آدرس ایمیل"
                                isFullWidth
                            />
                        </div>

                        <div className="flex justify-end mt-6">
                            <Button className="" variant="primary">
                                ادامه
                            </Button>
                        </div>

                        <div className="relative mt-10 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                                    ورود یا ثبت نام با
                                </span>
                            </div>
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

export default withTranslation("common")(Authentication);
