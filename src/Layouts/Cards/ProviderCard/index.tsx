import React from "react";
import { Card, Avatar } from "@Components";
import CardBody from "@Components/Card/CardBody";
import Badge from "@Components/Basic/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@Components/Basic";
import { IProviderCard } from "./ProviderCard";

const ProviderCard: React.FunctionComponent<IProviderCard.IProps> = () => {
    return (
        <Card>
            <CardBody dir="rtl">
                <div className="flex ">
                    <div className="flex flex-1">
                        <Avatar
                            square
                            size="regular"
                            badge
                            src="https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg"
                        />
                        <div className="flex flex-col pr-5 justify-around">
                            <div className="flex">
                                <h5 className="ml-3 text-base font-bold">
                                    مشاور املاک تهرانی
                                </h5>
                                <Badge classNames="px-3 py-0" rounded="md">
                                    <span
                                        style={{ fontSize: "10px" }}
                                        className="text-xxs"
                                    >
                                        4.5
                                    </span>
                                </Badge>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-light text-xxs mr-3">
                                    ۹۹ پروفایل فعال
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 justify-around lg:text-right  sm:text-center">
                        <div>
                            <FontAwesomeIcon icon={faFile} />
                            <span className="mr-3 text-xxs">
                                تهران | بلوار کشاورز
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFile} />
                            <span className="mr-3 text-xxs">
                                <span> ۲۳۴۵۶۸۸۷۶ </span>
                                <span> - </span>
                                <span>۰۲۱</span>
                            </span>
                        </div>
                    </div>
                    <div
                        style={{ flexGrow: 0.1 }}
                        className="flex  items-center sm:flex-grow-0"
                    >
                        <FontAwesomeIcon className="ml-5" icon={faFile} />
                        <Button variant="bg-none">
                            <span className="text-xxs py-1 text-main-color">
                                مشاهده کسب و کار
                            </span>
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProviderCard;
