import routesPaciente from "../../modules/Pacientes/routes";
import { Router } from "express";

const routes = Router();

routes.use("/pacientes", routesPaciente);

export default routes;
