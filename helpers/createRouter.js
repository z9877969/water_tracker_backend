const { Router } = require("express");

class RouterCreator {
  #options;
  #defaultMiddlewares;
  #router;

  constructor({ options, defaultMiddlewares = [] }) {
    this.#options = options;
    this.#defaultMiddlewares = defaultMiddlewares;
    this.#router = Router();
  }

  get router() {
    return this.#router;
  }

  setRouter(controllers) {
    this.#options.forEach(({ route, method, controller, middlewares }) => {
      const dm = this.#defaultMiddlewares;
      const m =
        middlewares && dm.length
          ? dm.concat(middlewares)
          : middlewares
          ? middlewares
          : dm
          ? dm
          : null;
      m
        ? this.#router[method](route, ...m, controller)
        : this.#router[method](route, controller);
    });
  }
}

const createRouter = ({ options, defaultMiddlewares }) => {
  return new RouterCreator({ options, defaultMiddlewares });
};

module.exports = createRouter;
