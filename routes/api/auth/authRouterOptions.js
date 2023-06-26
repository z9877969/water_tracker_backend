const {
    validateAuth: validate,
    authorization,
  } = require("../../../middlewares");

const authRouterOptions = [
  {
    method: "post",
    route: "/register",
    middlewares: [validate.authUser],
    controller: "registerUser",
  },
  {
    method: "post",
    route: "/login",
    middlewares: [validate.authUser],
    controller: "loginUser",
  },
  {
    method: "get",
    route: "/logout",
    middlewares: [authorization],
    controller: "logoutUser",
  },
];

module.exports = authRouterOptions;
