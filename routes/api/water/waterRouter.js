const { createRouter } = require("../../../helpers");
const {
  waterRoutersOptions,
  defaultMiddlewares,
} = require("./waterRouterOptions");

const waterRouter = createRouter({
  options: waterRoutersOptions,
  defaultMiddlewares: defaultMiddlewares,
});

waterRouter.setRouter();

module.exports = waterRouter.router;
