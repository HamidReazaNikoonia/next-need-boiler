// #region Global Imports
import React from "react";
import { cx } from "@Utils";
// #endregion Global Imports

// #region Local Imports
import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IRequestCard } from "./RequestCard";
// #endregion Interface Imports

export const RequestCard: React.FunctionComponent<IRequestCard.IProps> = (
    props: IRequestCard.IProps
) => {
    const { bg, border, body, as, size } = props;

    const containerClasess = cx(
        `transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3`,
        bg && bg,
        border && border,
        styles.requestCard
    );
    return (
        <section className={containerClasess}>
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                card
            </div>
        </section>
    );
};
