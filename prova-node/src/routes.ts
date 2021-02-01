import express from 'express';
import UsersController from './controllers/UsersController';
import { body, validationResult } from 'express-validator';

const routes = express.Router();
const usersController = new UsersController();


routes.post('/users', usersController.create );
routes.get('/users', usersController.show);
routes.get('/users/:id', usersController.index); 
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);


export default routes;