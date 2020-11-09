// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const VisuallyHiddenContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border: "0px";
    clip: "rect(0px, 0px, 0px, 0px)";
    height: "1px";
    width: "1px";
    margin: "-1px";
    padding: "0px";
    overflow: "hidden";
    whitespace: "nowrap";
    position: "absolute";
`;
