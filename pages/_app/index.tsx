// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
// import { theme } from "@Definitions/Styled";

import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";
import defaultTheme from "../../src/themes/default";
import { ThemeProvider } from "../../src/context/ThemeContext";

// import "@Static/css/main.scss";
import "../../src/globalStyles/index.scss";
// import "../../src/globalStyles/_theme.scss";
// #endregion Local Imports
// eslint-disable-next-line import/no-webpack-loader-syntax
// const theme2 = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./../../src/globalStyles/index.scss');

// const theme = { ...theme1, ...theme2 };

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider value={defaultTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
