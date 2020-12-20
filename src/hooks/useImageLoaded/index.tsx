import * as React from "react";

export type paramsTypes = {
    src: string;
    srcSet: string;
};

export function useLoaded({ src, srcSet }: paramsTypes) {
    const [loaded, setLoaded] = React.useState<boolean | string>(false);

    React.useEffect(() => {
        if (!src && !srcSet) {
            return undefined;
        }

        setLoaded(false);

        let active = true;
        const image = new Image();
        image.src = src;
        if (srcSet) {
            image.srcset = srcSet;
        }
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded("loaded");
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded("error");
        };

        return () => {
            active = false;
        };
    }, [src, srcSet]);

    return loaded;
}
