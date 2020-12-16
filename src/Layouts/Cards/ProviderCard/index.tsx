import React from "react";
import { Card } from "@Components";
import CardBody from "@Components/Card/CardBody";
import { IProviderCard } from "./ProviderCard";

const ProviderCard: React.FunctionComponent<IProviderCard.IProps> = props => {
    return (
        <Card>
            <CardBody>
                <div className="flex flex-col">
                    <div className="flex" />
                    <div className="flex" />
                    <div className="flex" />
                </div>
            </CardBody>
        </Card>
    );
};

export default ProviderCard;
