import { Router } from 'express';
const routesProducts = Router();
import { ListarProducto, registrarProducto } from '../controllers/controller.productos';

routesProducts.get('/productos', ListarProducto);
routesProducts.post('/productos-registro', registrarProducto);

export default routesProducts;
