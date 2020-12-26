export declare module IDropDown {
    export interface DropDownLabelProps {
        children: React.ReactChildren | string;
        id: string;
    }

    export interface DropdownItem {
        id: string | number;
        label: string;
        avatar?:
            | {
                  alt?: string;
                  src: string;
              }
            | null
            | boolean;
        selected?: boolean;
    }
    export interface IProps {
        id: string;
        /** @default 'dropdown' */
        styles?: React.CSSProperties;
        /**
         * Determines the direction and location of the Menu in relation to it's Toggle.
         */
        drop?: "up" | "left" | "right" | "down";

        as?: React.ReactNode;

        /**
         * Align the menu to the right side of the Dropdown toggle
         */
        alignRight?: boolean;

        /**
         * Whether or not the Dropdown is visible.
         *
         * @controllable onToggle
         */
        show: boolean;

        /**
         * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
         * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
         *
         */
        flip?: boolean;

        /**
         * A callback fired when the Dropdown wishes to change visibility. Called with the requested
         * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
         *
         * ```js
         * function(
         *   isOpen: boolean,
         *   event: SyntheticEvent,
         *   metadata: {
         *     source: 'select' | 'click' | 'rootClose' | 'keydown'
         *   }
         * ): void
         * ```
         *
         * @controllable show
         */
        onToggle?: Function;

        /**
         * A callback fired when a menu item is selected.
         *
         * ```js
         * (eventKey: any, event: Object) => any
         * ```
         */
        onSelect: Function;
        /**
         * Selected Item , get from props, default is null
         * (item: object)
         *
         * @type {DropdownItem}
         * @memberof IProps
         */
        selectedItemProps?: DropdownItem | null;
        /**
         * when set to `true` , container of Dropdown list will appear with
         * scroll , default max-heigth is 160px
         *
         * @type {boolean}
         * @memberof IProps
         */
        hasScroll: boolean;

        /**
         * Controls the focus behavior for when the Dropdown is opened. Set to
         * `true` to always focus the first menu item, `keyboard` to focus only when
         * navigating via the keyboard, or `false` to disable completely
         *
         * The Default behavior is `false` **unless** the Menu has a `role="menu"`
         * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
         */
        focusFirstItemOnShow: false | true | "keyboard";

        /**
         *
         *
         * @type {string}
         * @memberof IProps
         *  { sm: 10px, md: 100px }
         *  default is sm
         */
        borderRadius?: string;
        /**
         * Custom Background color of dropDown
         *
         * @type {string}
         * @memberof IProps
         */
        bgColor?: string;
        className?: string;
        placeHolder?: string;
        label?: string;
        options: Array;
    }

    export interface IState {}
}
