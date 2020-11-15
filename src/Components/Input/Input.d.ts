import { CoreProps } from "@Interfaces/Props";

export declare module IInput {
    export interface IProps {
        /**
         * The border color when the input is focused. Use color keys in `theme.colors`
         * @example
         * focusBorderColor = "blue.500"
         */
        focusBorderColor?: string;
        /**
         * The border color when the input is invalid. Use color keys in `theme.colors`
         * @example
         * errorBorderColor = "red.500"
         */
        warning?: boolean;
        /**
         * If warning props `true`, the string placed under Input element
         */
        warningText?: string;
        /**
         * If `true`, the input element will span the full width of it's parent
         */
        isFullWidth?: boolean;
        /**
         * Input Type include Text, Number, Password
         */
        type?: "text" | "number" | "password";
        /**
         * If `true`, the button will be disabled.
         */
        isDisabled?: boolean;
        /**
         * The size of the Input.
         */
        size?: string;
        /**
         * If `true`, the `Input` will show a border around it.
         *
         * Best for a group of Inputs
         */
        showBorder?: boolean;
        /**
         * The border color of the Input
         */
        borderColor?: any;
        /**
         * The spacing between the checkbox and it's label text (marginLeft)
         * @default 0.5rem
         */
        spacing?: string;
        /**
         * Function called when image failed to load
         */
        onError?: () => void;
        /**
         * The initial value of the Input. Should be less than `max` and greater than `min`
         */
        defaultValue?: string | number;
        /**
         * The value of the Input. Should be less than `max` and greater than `min`
         */
        value?: string | number;
        label: string;
        placeholder?: string;
        /**
         * The minimum value of the Input
         * @default -Infinity
         */
        min?: number;
        /**
         * The maximum value of the Input
         * @default Infinity
         */
        max?: number;
        className?: string;
        /**
         * A convenience prop for add the `text-muted` class,
         * since it's so commonly used here.
         */
        muted?: boolean;
        /**
         * Implement Direction of Input
         * adding `dir` attribute on Input Tag
         */
        inputDirection?: "rtl" | "ltr";
        /**
         * Specific uniqe id attribute
         */
        id: string;
        variant?: CoreProps["variant"];
    }

    export interface IState {}
}
