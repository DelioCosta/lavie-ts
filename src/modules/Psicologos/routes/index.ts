import { Router } from "express";
import { psicologoController } from "../controller";

const routes = Router();
// /psicologo
routes.post("/", psicologoController.create);

export default routes;
