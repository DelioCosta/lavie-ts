import { pacienteRepository } from "../../../repositories";
import PacientesUseCase from "./PacientesUseCase";

const pacientesUseCase = new PacientesUseCase(pacienteRepository);

export { pacientesUseCase };
