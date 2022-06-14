import IRepository from "../../../repositories/IRepository";

type CadastrarPsicologosPayload = {
  nome: string;
  email: string;
  idade: string;
  senha: string;
  apresentacao: string;
};
export default class PsicologosUseCase {
  private repository: IRepository;

  constructor(psicologosRepository: IRepository) {
    this.repository = psicologosRepository;
  }

  cadastrarPsicologo(payload: CadastrarPsicologosPayload) {
    const psicologosData = {
      nome_completo: payload.nome,
      email: payload.email,
      idade: payload.idade,
      senha: payload.senha,
      apresentacao: payload.apresentacao,
    };
    const newPsicologos = this.repository.create();

    return newPsicologos;
  }
}
