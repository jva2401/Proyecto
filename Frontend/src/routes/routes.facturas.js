import { Router } from "express";
import { ListarFactura } from "../controllers/controller.facturas";

const RutaFactura = Router();

RutaFactura.get("/factura", ListarFactura);

export default RutaFactura;