const { Router } = require("express");
const { users: controllers } = require("../../controllers");
const { validateUser: validate, authorization } = require("../../middlewares");

const usersRouter = Router();

usersRouter.post("/register", validate.authUser, controllers.registerUser);
usersRouter.post("/login", validate.authUser, controllers.loginUser);
usersRouter.get("/current/user", authorization, controllers.getCurrentUser);
usersRouter.patch(
  "/users/info",
  authorization,
  validate.updateUserInfo,
  controllers.updateUserInfo
);
usersRouter.patch("/avatar", authorization, controllers.updateUserAvatar);

module.exports = usersRouter;
