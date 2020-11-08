// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IHamid } from "./Hamid";
// #endregion Interface Imports

export const Hamid: React.FunctionComponent<IHamid.IProps> = (
    props: IHamid.IProps
) => {
    return (
        <>
            <Container>
                <h3>Hamid Nikoo</h3>
            </Container>
        </>
    );
};
