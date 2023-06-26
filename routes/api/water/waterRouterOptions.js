const {
  authorization,
  validateWater: validate,
  userAccessToEntity,
} = require("../../../middlewares");
const { Water } = require("../../../models");

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
    middlewares: [userAccessToEntity(Water, "Note"), validate.updateWaterNote],
  },
  {
    route: "/notes/:id",
    method: "patch",
    controller: "updateWaterNote",
    middlewares: [userAccessToEntity(Water, "Note")],
  },
  {
    route: "/stats/day",
    method: "get",
    controller: "getWaterStatsByCurrentDay",
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

module.exports = { waterRoutersOptions, defaultMiddlewares };
