/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-underscore-dangle */
// #region Global Imports
import React from "react";
import { cx } from "../../../utilis";
// import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { IButton } from "./Button";
// #endregion Local Imports

// const Container = styled.div<IButton.IProps>`
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//     color: ${({ theme }) => theme.colors.primary};
// `;

// export const Button: React.FunctionComponent<IButton.IProps> = props => {
//     return <Container {...props} />;
// };

export const Button = React.forwardRef<HTMLButtonElement, IButton.IProps>(
    function Button(
        {
            type,
            isLoading,
            as,
            className,
            isActive,
            isDisabled,
            loadingText,
            isFullWidth,
            leftIcon,
            rightIcon,
            iconSpacing,
            spinner,
            variant,
            styles,
            children,
            ...props
        },
        ref
    ) {
        // Button Styles
        const buttonStyles = {
            display: "inline-flex",
            appearance: "none",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 250ms",
            userSelect: "none",
            position: "relative",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            outline: "none",
            width: isFullWidth ? "100%" : "auto",
            ...styles,
        };

        const Component: any = as || "button";

        return (
            <Component
                disabled={isDisabled || isLoading}
                ref={ref}
                type={as ? undefined : type}
                style={buttonStyles}
                className={className}
                {...props}
            >
                {leftIcon && !isLoading && (
                    <ButtonIcon mr={iconSpacing} children={leftIcon} />
                )}
                {isLoading && (
                    <ButtonSpinner
                        styles={{ fontSize: "1em", lineHeight: "normal" }}
                        spacing={iconSpacing}
                        label={loadingText}
                        children={spinner}
                    />
                )}
                {isLoading
                    ? loadingText || (
                          <span style={{ opacity: 0 }} children={children} />
                      )
                    : children}
                {rightIcon && !isLoading && (
                    <ButtonIcon ml={iconSpacing} children={rightIcon} />
                )}
            </Component>
        );
    }
);

const ButtonIcon: React.FC<any> = props => {
    const { children, className, ...rest } = props;

    const _children = React.isValidElement(children)
        ? React.cloneElement(children, {
              focusable: false,
          })
        : children;

    const _className = cx("button__icon", className);

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    );
};

interface ButtonSpinnerProps {
    label?: string;
    spacing?: string;
    className?: string;
    styles?: any;
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
    const {
        label,
        spacing,
        // children = <Spinner color="currentColor" width="1em" height="1em" />,
        children = <div />,
        className,
        styles,
        ...rest
    } = props;

    const _className = cx("button__spinner", className);

    // Spinner styles
    const spinnerStyles = {
        display: "flex",
        alignItems: "center",
        position: label ? "relative" : "absolute",
        mr: label ? spacing : 0,
        ...styles,
    };

    return (
        <div className={_className} {...rest} style={spinnerStyles}>
            {children}
        </div>
    );
};
