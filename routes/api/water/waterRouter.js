const { createRouter } = require("../../../helpers");
const { water: controllers } = require("../../../controllers");
const {
  waterRoutersOptions,
  defaultMiddlewares,
} = require("./waterRouterOptions");

const waterRouter = createRouter({
  options: waterRoutersOptions,
  defaultMiddlewares: defaultMiddlewares,
});

waterRouter.setRouter(controllers);

module.exports = waterRouter.router;
