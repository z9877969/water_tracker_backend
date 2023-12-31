const {
  authorization,
  validateWater: validate,
  userAccessToEntity,
} = require("../../../middlewares");
const { water: controllers } = require("../../../controllers");
const { Water } = require("../../../models");

const defaultMiddlewares = [authorization.accessToken];

const waterRoutersOptions = [
  {
    route: "/notes",
    method: "post",
    controller: controllers.addWaterNote,
    middlewares: [validate.addWaterNote],
  },
  {
    route: "/notes/:id",
    method: "delete",
    controller: controllers.removeWaterNote,
    middlewares: [userAccessToEntity(Water, "Water`s note")],
  },
  {
    route: "/notes/:id",
    method: "patch",
    controller: controllers.updateWaterNote,
    middlewares: [
      userAccessToEntity(Water, "Water`s note"),
      validate.updateWaterNote,
    ],
  },
  {
    route: "/stats/day",
    method: "get",
    controller: controllers.getWaterStatsByCurrentDay,
    middlewares: null,
  },
  {
    route: "/stats/:month",
    method: "get",
    controller: controllers.getWaterStatsByMonthDays,
    middlewares: [validate.getWaterStatsMonthFormat],
  },
];

module.exports = { waterRoutersOptions, defaultMiddlewares };
