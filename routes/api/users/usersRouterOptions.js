const {
  authorization,
  validateUser: validate,
  upload,
} = require("../../../middlewares");
const { users: controllers } = require("../../../controllers");

const defaultMiddlewares = [authorization];

const usersRouterOptions = [
  {
    method: "get",
    route: "/current",
    middlewares: null,
    controller: controllers.getCurrentUser,
  },
  {
    method: "patch",
    route: "/info",
    middlewares: [validate.updateUserInfo],
    controller: controllers.updateUserInfo,
  },
  {
    method: "patch",
    route: "/avatar",
    middlewares: [upload.single("avatarUrl")],
    controller: controllers.updateUserAvatar,
  },
  {
    method: "patch",
    route: "/water/rate",
    middlewares: [validate.updateWaterRate],
    controller: controllers.updateWaterRate,
  },
];

module.exports = {
  defaultMiddlewares,
  usersRouterOptions,
};
