import React, { useContext } from "react";
import { cx } from "@Utils/index";
import { ThemeContext } from "../../context/ThemeContext";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, Props>(function CardBody(
    props,
    ref
) {
    const { className, children, ...other } = props;
    const { cardBody } = useContext(ThemeContext);

    const baseStyle = cardBody.base;

    const cls = cx(baseStyle, className);

    return (
        <div className={cls} ref={ref} {...other}>
            {children}
        </div>
    );
});

export default CardBody;
