// #region Global Imports
import React from "react";

import { cx } from "@Utils/index";
// #endregion Global Imports

// #region Local Imports
import { ThemeContext } from "@Context/ThemeContext";
import Badge from "@Components/Basic/Badge";
import { useLoaded } from "@Hooks/index";
// import styles from "./style.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { IAvatar } from "./Avatar";
// #endregion Interface Imports

export const Avatar: React.FunctionComponent<IAvatar.IProps> = (
    props: IAvatar.IProps
) => {
    const {
        size = "regular",
        src = "",
        srcSet,
        name,
        className,
        badge,
        ...other
    } = props;
    const { avatar } = React.useContext(ThemeContext);
    // Use a hook instead of onError on the img element to support server-side rendering.
    const loaded = useLoaded({ src, srcSet });
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== "error";

    const baseStyle = avatar?.base;
    const sizeStyles: any = {
        large: avatar?.size.large,
        regular: avatar?.size.regular,
        small: avatar?.size.small,
    };

    const cls = cx(baseStyle, sizeStyles[size], className);

    return (
        <div className={cls} {...other}>
            {hasImgNotFailing ? (
                <img
                    className="object-cover w-full h-full rounded-lg"
                    src={src}
                    srcSet={srcSet}
                    alt={name}
                    loading="lazy"
                />
            ) : (
                <p className="flex justify-center">loading</p>
            )}
            {badge && (
                <div
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        bottom: "-7px",
                    }}
                    className="absolute  rounded-md shadow-inner"
                    aria-hidden="true"
                >
                    <Badge avatarBadge />
                </div>
            )}
        </div>
    );
};
