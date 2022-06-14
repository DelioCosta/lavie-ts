import IRepository from "../../../repositories/IRepository";

type CadastrarPacientePayload = {
  nome: string;
  email: string;
  idade: string;
};
export default class PacientesUseCase {
  private repository: IRepository;

  constructor(pacienteRepository: IRepository) {
    this.repository = pacienteRepository;
  }

  cadastrarPaciente(payload: CadastrarPacientePayload) {
    const pacienteData = {
      nome_completo: payload.nome,
      email: payload.email,
      idade: payload.idade,
    };
    const newPaciente = this.repository.create();

    return newPaciente;
  }
}
