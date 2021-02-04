// #region Global Imports
import React from "react";
import { NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { cx } from "@Utils/index";
import DashboardMainLayout from "@Layouts/Dashboard/MainLayout";
// import { IStore } from "@Redux/IStore";
// import { SampleActions } from "@Actions";
import { ISample } from "@Interfaces";
import { Card, Avatar, Input, DropDown } from "@Components";
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
            <DashboardMainLayout>
                {/* My Profile Card */}
                <div dir="rtl" className="flex flex-col w-full p-5">
                    <section>
                        {/* Title */}
                        <div className=" text-xxl font-semibold pb-6">
                            پروفایل من
                        </div>

                        {/* Card */}
                        <Card className="p-6" rounded="lg">
                            <div className="flex flex-col justify-center items-center">
                                {/* Profile Avatar */}
                                <Avatar
                                    name="profile_avatar"
                                    src="https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg"
                                />

                                {/* Form */}
                                <div className="flex justify-between w-full flex-wrap mt-16">
                                    <Input
                                        className={styles.input}
                                        id="name"
                                        label="نام"
                                        placeholder="نام خود را وارد کنید"
                                    />
                                    <Input
                                        className={styles.input}
                                        id="family"
                                        label="نام خانوادگی"
                                        placeholder="نام خانوادگی را وارد کنید"
                                    />
                                    <Input
                                        className={styles.input}
                                        id="id"
                                        label="کد ملی"
                                        placeholder="کد ملی خود را وارد کنید"
                                    />
                                    <Input
                                        className={styles.input}
                                        id="mobile"
                                        label="شماره همراه"
                                        placeholder="شماره همراه را وارد کنید"
                                    />
                                </div>

                                <div className="flex justify-between  w-full flex-wrap mt-5">
                                    <Input
                                        className={styles.input}
                                        id="email"
                                        label="ایمیل"
                                        placeholder="ایمیل را وارد کنید"
                                    />

                                    <DropDown
                                        className={styles.input}
                                        id="someid"
                                        label="نام"
                                        onSelect={(id, item) => console.log(id)}
                                        options={[]}
                                    />

                                    <DropDown
                                        className={styles.input}
                                        id="someid"
                                        label="نام"
                                        onSelect={(id, item) => console.log(id)}
                                        options={[]}
                                    />

                                    {/* TODO: delete */}
                                    <Input
                                        className={cx(
                                            styles.input,
                                            " opacity-0"
                                        )}
                                        id="mobile"
                                        label="شماره همراه"
                                        placeholder="شماره همراه را وارد کنید"
                                    />
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>
            </DashboardMainLayout>
        </section>
    );
};

// Sample.getInitialProps = async (
//     ctx: ReduxNextPageContext
// ): Promise<ISample.InitialProps> => {
//     return { namespacesRequired: ["common"] };
// };

export default withTranslation("common")(Profile);
