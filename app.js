const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/api/usersRouter");

const app = express();

const loggerFormat = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(loggerFormat));
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found - invalid request" });
});

app.use((err, req, res, next) => {
  const { message = "Server error", status = 500 } = err;
  res.status(status).json({ message });
});

module.exports = app;
