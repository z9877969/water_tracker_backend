const { Router } = require("express");
const { users: controllers } = require("../../controllers");
const {
  validateUser: validate,
  authorization,
  upload,
} = require("../../middlewares");

const usersRouter = Router();

usersRouter.post("/register", validate.authUser, controllers.registerUser);
usersRouter.post("/login", validate.authUser, controllers.loginUser);
usersRouter.get("/logout", authorization, controllers.logoutUser);
usersRouter.get("/current", authorization, controllers.getCurrentUser);
usersRouter.patch(
  "/info",
  authorization,
  validate.updateUserInfo,
  controllers.updateUserInfo
);
usersRouter.patch(
  "/avatar",
  authorization,
  upload.single("avatarUrl"),
  controllers.updateUserAvatar
);
usersRouter.patch(
  "/water/rate",
  authorization,
  validate.updateWaterRate,
  controllers.updateWaterRate
);

module.exports = usersRouter;
