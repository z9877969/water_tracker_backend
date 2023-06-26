const { createRouter } = require("../../../helpers");
const { users: controllers } = require("../../../controllers");
const {
  defaultMiddlewares,
  usersRouterOptions,
} = require("./usersRouterOptions");

const usersRouter = createRouter({
  defaultMiddlewares,
  options: usersRouterOptions,
});

usersRouter.setRouter(controllers);

module.exports = usersRouter.router;
