import React from "react";
import defaultTheme from "../themes/default";

interface ThemeContextInterface {
    theme: any;
    mode?: any;
    toggleMode?: any;
    avatar?: {
        base: string;
        size: {
            large: string;
            regular: string;
            small: string;
        };
    };
    card?: any;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
    theme: defaultTheme,
});

interface ThemeProviderProps {
    children: React.ReactNode;
    value?: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    value,
}) => {
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
