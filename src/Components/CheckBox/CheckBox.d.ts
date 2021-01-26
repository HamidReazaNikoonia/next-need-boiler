import * as React from "react";

export declare module ICheckBox {
    export interface IProps {
        /**
         * The FormCheck `ref` will be forwarded to the underlying input element,
         * which means it will be a DOM node, when resolved.
         *
         * @type {ReactRef}
         * @alias ref
         */
        _ref?: any;

        /**
         * A HTML id attribute, necessary for proper form accessibility.
         * An id is recommended for allowing label clicks to toggle the check control.
         *
         * This is **required** for custom check controls or when `type="switch"` due to
         * how they are rendered.
         */
        id: string;

        /**
         * Provide a function child to manually handle the layout of the CheckBox's inner components.
         *
         * ```jsx
         * <CheckBox>
         *   <CheckBox.Input isInvalid type={radio} />
         *   <CheckBox.Label>Allow us to contact you?</CheckBox.Label>
         *   <Feedback type="invalid">Yo this is required</Feedback>
         * </CheckBox>
         * ```
         */
        children?: any;

        /**
         * Groups controls horizontally with other `CheckBox`s.
         */
        inline?: boolean;

        /**
         * Disables the control.
         */
        disabled?: boolean;

        /**
         * `title` attribute for the underlying `CheckLabel`.
         */
        title: string;

        /**
         * Label for the control.
         */
        label: React.ReactNode;

        /**
         * The type of checkable.
         * @type {('radio' | 'checkbox' | 'switch')}
         */
        type?: "radio" | "checkbox" | "switch";

        /** Manually style the input as valid */
        isValid?: boolean;

        /** Display feedback as a tooltip. */
        feedbackTooltip?: boolean;

        /** A message to display when the input is in a validation state */
        feedback?: React.ReactNode;

        /** Custom classNames */
        className?: string;

        /** Input Name */
        name?: string;

        /** change handler */
        onChange?: (e: Event) => void;

        /** Display tooltip in feedback case */
        feedbackTooltip?: boolean;
    }

    export interface IState {}
}
