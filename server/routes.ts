// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/auth/sign-in", "/authentication/signIn/index");
routes.add("/auth/sign-up", "/authentication/signUp/index");
routes.add("/dashboard/request-order", "/dashboard/requestOrder/index");
routes.add("/sample", "/sample/index");

export default routes;
