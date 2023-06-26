const { createRouter } = require("../../../helpers");
const { auth: controllers } = require("../../../controllers");
const authRouterOptions = require("./authRouterOptions");

const authRouter = createRouter({
  options: authRouterOptions,
});

authRouter.setRouter(controllers);

module.exports = authRouter.router;
