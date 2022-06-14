import PacientesRepository from "./Pacientes";
import { pacientes } from "../models";
import PsicologosRepository from "./Psicologos";
import { psicologos } from "../models";

const pacienteRepository = new PacientesRepository(pacientes);
const psicologoRepository = new PsicologosRepository(psicologos);
export { pacienteRepository, psicologoRepository };
