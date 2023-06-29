const {
  validateAuth: validate,
  authorization,
} = require("../../../middlewares");
const { auth: controllers } = require("../../../controllers");

const authRouterOptions = [
  {
    method: "post",
    route: "/register",
    middlewares: [validate.authUser],
    controller: controllers.registerUser,
  },
  {
    method: "post",
    route: "/login",
    middlewares: [validate.authUser],
    controller: controllers.loginUser,
  },
  {
    method: "get",
    route: "/logout",
    middlewares: [authorization.accessToken],
    controller: controllers.logoutUser,
  },
  {
    method: "get",
    route: "/refresh",
    middlewares: [authorization.refreshToken, validate.refreshTokens],
    controller: controllers.refreshTokens,
  },
];

module.exports = authRouterOptions;
