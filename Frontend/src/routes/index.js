import { Router } from "express";

import RutaUsuario from "./routes.usuario";

import RutaDash from "./routes.dash";
import routesProducts from "./routes.product";
import RutaFactura from "./routes.facturas";
const ruta = Router();
ruta.use("/", RutaUsuario);
ruta.use("/", RutaDash);
ruta.use("/",routesProducts)
ruta.use("/", RutaFactura)

export default ruta;

