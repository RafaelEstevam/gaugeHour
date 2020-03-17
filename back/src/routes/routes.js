const {Router} = require("express");

const devController = require("../controllers/DevController");
const searchController = require("../controllers/SearchController");
const userController = require("../controllers/UserController");
const authController = require("../controllers/authController");
const validationController = require("../controllers/ValidationController");

const authMiddleware = require("../middlewares/auth");

const routes = Router();

routes.post('/users', userController.store);
routes.get('/users', userController.index);
routes.post('/auth', authController.store);

routes.use(authMiddleware); // tudo que estiver abaixo deste interceptador, precisará informar o token

routes.get('/', validationController.show)

routes.post('/devs', devController.store);
routes.get('/devs', devController.index);
routes.get('/devs/:github_user', devController.show);

routes.get('/search', searchController.index);



module.exports = routes;