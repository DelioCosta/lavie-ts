import PsicologosController from "./Psicologos";

import { psicologosUseCase } from "../useCases";

const psicologoController = new PsicologosController(psicologosUseCase);

export { psicologoController };
