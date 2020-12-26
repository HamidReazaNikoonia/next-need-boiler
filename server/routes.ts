// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/authentication", "/authentication/index");
routes.add("/dashboard/request-order", "/dashboard/requestOrder/index");

export default routes;
