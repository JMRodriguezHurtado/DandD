const {Router} = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");


const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);


module.exports = mainRouter;
