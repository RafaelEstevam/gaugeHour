const {Router} = require("express");

const devController = require("../controllers/DevController");
const searchController = require("../controllers/SearchController");
const userController = require("../controllers/UserController");
const authController = require("../controllers/authController");

const routes = Router();

routes.get('/', (req, res) =>{
    return res.json({message: 'Hello World'});
});

routes.post('/devs', devController.store);
routes.get('/devs', devController.index);
routes.get('/devs/:github_user', devController.show);

routes.get('/search', searchController.index);

routes.post('/users', userController.store);
routes.get('/users', userController.index);
routes.get('/users/:_id', userController.show);

routes.post('/auth', authController.store);

module.exports = routes;