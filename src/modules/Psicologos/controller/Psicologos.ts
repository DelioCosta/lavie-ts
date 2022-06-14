import { Request, Response } from "express";

import PsicologosUseCase from "../useCases/PsicologosUseCase";

type BodyCreatePsicologo = {
  nome: string;
  email: string;
  idade: number;
  senha: string;
  apresentacao: string;
};
export default class PsicologosController {
  private useCase: PsicologosUseCase;

  constructor(useCase: PsicologosUseCase) {
    this.useCase = useCase;
  }

  async create(req: Request, res: Response) {
    try {
      //recebemos a requisição
      const { nome, email, idade, senha, apresentacao } = req.body;

      const psicologo = await this.useCase.cadastrarPsicologo({
        nome,
        email,
        idade,
        senha,
        apresentacao,
      });

      //devolvemos uma resposta
      return res.status(201).json(psicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  }
}
