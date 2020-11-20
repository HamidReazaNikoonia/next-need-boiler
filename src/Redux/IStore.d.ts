// #region Interface Imports
import { IHomePage, IAuthentication } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    authentication: IAuthentication.IStateProps;
    home: IHomePage.IStateProps;
}
