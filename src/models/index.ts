import Pacientes from "./Pacientes";
import { mySqlConection } from "../database";

const pacientes = new Pacientes(mySqlConection);

export { pacientes };