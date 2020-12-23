// #region Interface Imports
import { IHomePage, IAuthentication, IRequestOrder } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    requestOrder: IRequestOrder.IStateProps;
    authentication: IAuthentication.IStateProps;
    home: IHomePage.IStateProps;
}
