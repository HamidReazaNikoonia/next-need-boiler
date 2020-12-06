import React from "react";

export declare module IRequestCard {
    export interface IProps {
        /**
         * Sets card background
         *
         * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
         */
        bg?: string;

        /**
         * Sets card text color
         *
         * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
         */
        text?: string;

        /**
         * Sets card border color
         *
         * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
         */
        border?: string;

        /**
         * When this prop is set, it creates a Card with a Card.Body inside
         * passing the children directly to it
         */
        body?: bool;

        as?: React.ReactElement;
        styles?: React.CSSProperties;
    }

    export interface IState {}
}
