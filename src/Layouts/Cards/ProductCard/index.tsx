// #region Global Imports
import React from "react";
import { cx } from "@Utils";
// #endregion Global Imports

// #region Local Imports
// import styles from "./style.module.scss";
import { Card } from "@Components";
import CardBody from "@Components/Card/CardBody";
// #endregion Local Imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// #region Interface Imports
import { Button } from "@Components/Basic";
import { IProductCard } from "./ProductCard";
// #endregion Interface Imports

const ProductCard: React.FunctionComponent<IProductCard.IProps> = (
    props: IProductCard.IProps
) => {
    // const { bg, border, body, as, size } = props;

    // const containerClasess = cx(
    //     `transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3`,
    //     bg && bg,
    //     border && border,
    //     styles.requestCard
    // );
    return (
        <>
            <Card>
                <CardBody>
                    <div className="flex flex-col p-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <Button variant="primary">
                                    <span
                                        style={{ lineHeight: "initial" }}
                                        className="text-xxs"
                                    >
                                        مشاهده درخواست
                                    </span>
                                </Button>
                            </div>
                            <div>
                                <span className="text-base">
                                    اجاره آپارتمان ۹۰ متری
                                </span>
                            </div>
                        </div>

                        <div className="flex  pt-10 justify-between">
                            <div
                                dir="rtl"
                                className="flex flex-col  text-right"
                            >
                                <div className="flex pb-3">
                                    <FontAwesomeIcon
                                        className="opacity-50 h-5"
                                        icon={faCoffee}
                                    />
                                    <div className="text-xxs pr-2">
                                        ۲ روز پیش
                                    </div>
                                </div>

                                <div className="flex">
                                    <FontAwesomeIcon
                                        className="opacity-50 h-5"
                                        icon={faCoffee}
                                    />
                                    <div className="text-xxs pr-2">
                                        ۵۰ میلیون رهن - ۲ میلیون اجاره
                                    </div>
                                </div>
                            </div>
                            <div
                                dir="rtl"
                                className="flex flex-col  text-right"
                            >
                                <div className="flex pb-3">
                                    <FontAwesomeIcon
                                        className="opacity-50 h-5"
                                        icon={faCoffee}
                                    />
                                    <div className="text-xxs pr-2">
                                        تهران - بلوار کشاورز
                                    </div>
                                </div>

                                <div className="flex">
                                    <FontAwesomeIcon
                                        className="opacity-50 h-5"
                                        icon={faCoffee}
                                    />
                                    <div className="text-xxs pr-2">
                                        املاک - اجاره آپارتمان
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ProductCard;
