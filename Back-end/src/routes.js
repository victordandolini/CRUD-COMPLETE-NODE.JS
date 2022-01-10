import { Router } from "express";
import HelloController from "./controllers/HelloController";
import RepositoriesController from "./controllers/RepositoriesController";
import UsersController from "./controllers/UsersController";
import auth from "./middlewares/auth";
import SessionsController from "./controllers/SessionsController";


const routes = new Router();

// controller public

routes.post('/sessions', SessionsController.create)
routes.get('/hello', HelloController.index)

routes.use(auth);
//------


// controller private
// RESTfull
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/users/:user_id/repositories', RepositoriesController.index)
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories/:id', RepositoriesController.destroy);

export default routes;