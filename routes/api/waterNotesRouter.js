const { Router } = require("express");

const waterNotesRouter = Router();

waterNotesRouter.get("/", async (req, res, next) => {
  try {
    console.log("req.user :>> ", req.user);
    res.status(204);
  } catch (error) {
    next(error);
  }
});

module.exports = waterNotesRouter;
