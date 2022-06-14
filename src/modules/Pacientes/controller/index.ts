import PacientesController from "./Pacientes";

import { pacientesUseCase } from "../useCases";

const pacienteController = new PacientesController(pacientesUseCase);

export { pacienteController };
