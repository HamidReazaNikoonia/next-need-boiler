import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { cx } from "@Utils/index";
import styles from "./styles.module.scss";

interface IBadge {
    /**
     * The visual style of the badge
     *
     * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
     */
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    /**
     * Border radius of badge container
     *
     * @type {('sm'|'md'|'lg')}
     */
    rounded?: string;
}

export const Badge: React.FC<IBadge> = ({
    variant = "primary",
    rounded = 6,
}) => {
    const classNames = cx(styles.badge, styles[`badge-${variant}`]);

    const radiusType: any = {
        sm: 6,
        md: 10,
        lg: "100%",
    };

    const customStyles = {
        borderRadius: `${
            radiusType[rounded] ? radiusType[rounded] : radiusType.sm
        }px`,
    };

    return (
        <div style={customStyles} className={classNames}>
            <FontAwesomeIcon className={styles.icon} icon={faCheck} />
        </div>
    );
};

export default Badge;
