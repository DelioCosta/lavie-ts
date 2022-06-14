import { psicologoRepository } from "../../../repositories";
import PsicologosUseCase from "./PsicologosUseCase";

const psicologosUseCase = new PsicologosUseCase(psicologoRepository);

export { psicologosUseCase };
