const { Router } = require("express");
const { authorization, validateWater: validate } = require("../../middlewares");
const { water: controllers } = require("../../controllers");

const waterRoutersOptions = [
  {
    route: "/notes/:month",
    method: "get",
    controller: "getWaterStatsByMonthDays",
    middlewares: null,
  },
  {
    route: "/notes",
    method: "post",
    controller: "addWaterNote",
    middlewares: [validate.addWaterNote],
  },
  {
    route: "/notes/:id",
    method: "delete",
    controller: "removeWaterNote",
    middlewares: [validate.updateWaterNote],
  },
  {
    route: "/notes/:id",
    method: "patch",
    controller: "updateWaterNote",
    middlewares: null,
  },
  {
    route: "/stats/:month",
    method: "get",
    controller: "getWaterStatsByMonthDays",
    middlewares: [validate.getWaterStatsMonthFormat],
  },
];
const defaultMiddlewares = [authorization];

const waterRouter = Router();

// routes collection
waterRoutersOptions.forEach(({ route, method, controller, middlewares }) => {
  const m = middlewares
    ? defaultMiddlewares.concat(middlewares)
    : defaultMiddlewares;
  waterRouter[method](route, ...m, controllers[controller]);
});
// routes collection -END

module.exports = waterRouter;
