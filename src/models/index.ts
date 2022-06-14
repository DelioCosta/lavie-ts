import { mySqlConection } from "../database";
import { Pacientes } from "./Pacientes";
import { Psicologos } from "./Psicologos";

const pacientes = new Pacientes(mySqlConection);
const psicologos = new Psicologos(mySqlConection);

export { pacientes, psicologos };
