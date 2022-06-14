import { Router } from "express";
import { pacienteController } from "../controller";

const routes = Router();
// /pacientes/pacientes
routes.post("/", pacienteController.create);

export default routes;
