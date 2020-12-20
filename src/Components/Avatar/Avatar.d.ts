import React from "react";

export declare module IAvatar {
    export interface IProps {
        /**
         * The name of the person in the avatar.
         *
         * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
         * - If `src` is not loaded, the name will be used to create the initials
         */
        name?: string;
        /**
         * The size of the avatar.
         */
        size?: "regular" | "large" | "small";
        /**
         * If `true`, the `Avatar` will show a border around it.
         *
         * Best for a group of avatars
         */
        showBorder?: boolean;
        /**
         * The badge at the bottom center of the avatar.
         */
        badge?: React.ReactNode | boolean;
        /**
         * The image url of the `Avatar`
         */
        src?: string;
        /**
         * List of sources to use for different screen resolutions
         */
        srcSet?: string;
        /* Styles applied to the root element if not `src` or `srcSet`. */
        colorDefault: string;
        /**
         * Defines loading strategy
         */
        loading?: "eager" | "lazy";
        square?: boolean;
        circular: boolean;
        /**
         * The border color of the avatar
         */
        borderColor?: string;
        /**
         * Custom styles combined with Avatar styles
         */
        className?: object | string;
        /**
         * Function called when image failed to load
         */
        onError?: () => void;
        /**
         * The default avatar used as fallback when `name`, and `src`
         * is not specified.
         * @type React.ReactElement
         */
        icon?: React.ReactElement;
    }

    export interface IState {}
}
