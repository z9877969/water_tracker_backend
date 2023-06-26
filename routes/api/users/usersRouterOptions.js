const {
  authorization,
  validateUser: validate,
  upload,
} = require("../../../middlewares");

const defaultMiddlewares = [authorization];

const usersRouterOptions = [
  {
    method: "get",
    route: "/current",
    middlewares: null,
    controller: "getCurrentUser",
  },
  {
    method: "patch",
    route: "/info",
    middlewares: [validate.updateUserInfo],
    controller: "updateUserInfo",
  },
  {
    method: "patch",
    route: "/avatar",
    middlewares: [upload.single("avatarUrl")],
    controller: "updateUserAvatar",
  },
  {
    method: "patch",
    route: "/water/rate",
    middlewares: [validate.updateWaterRate],
    controller: "updateWaterRate",
  },
];

module.exports = {
  defaultMiddlewares,
  usersRouterOptions,
};
