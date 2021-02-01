// #region Interface Imports
import { IHomePage, IAuthentication, IRequestOrder, ISample } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    sample: ISample.IStateProps;
    requestOrder: IRequestOrder.IStateProps;
    authentication: IAuthentication.IStateProps;
    home: IHomePage.IStateProps;
}
