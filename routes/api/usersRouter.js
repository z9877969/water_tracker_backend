const { Router } = require("express");
const { users: controllers } = require("../../controllers");

const usersRouter = Router();

usersRouter.post("/register", controllers.registerUser);

module.exports = usersRouter;
