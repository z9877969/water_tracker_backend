const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/api/usersRouter");
const waterNotesRouter = require("./routes/api/waterNotesRouter");
const { authorization } = require("./middlewares");

const app = express();

const loggerFormat = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(loggerFormat));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRouter);
app.use("/api/water/notes", authorization, waterNotesRouter);

app.use((req, res, next) => {
  console.log(req.path);

  res.status(404).json({ message: "Not found - invalid request" });
});

app.use((err, req, res, next) => {
  const { message = "Server error", status = 500 } = err;
  res.status(status).json({ message });
});

module.exports = app;
