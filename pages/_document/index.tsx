// #region Global Imports
import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// #endregion Global Imports

class WebAppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v26.0.2/dist/font-face.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body className="overflow-hidden overflow-y-scroll">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default WebAppDocument;
