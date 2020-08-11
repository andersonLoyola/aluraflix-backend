/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import CategoriesController from './controllers/CategoriesController';

const routes = express.Router();

routes.get('/categorias', CategoriesController.index);
routes.post('/categorias', CategoriesController.create);

export default routes;
