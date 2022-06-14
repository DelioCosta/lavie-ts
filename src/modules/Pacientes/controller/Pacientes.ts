import { Request, Response } from "express";

import PacientesUseCase from "../useCases/PacientesUseCase";

type BodyCreatePaciente = {
  nome: string;
  email: string;
  idade: number;
};
export default class PacientesController {
  private useCase: PacientesUseCase;

  constructor(useCase: PacientesUseCase) {
    this.useCase = useCase;
  }

  async create(req: Request, res: Response) {
    try {
      //recebemos a requisição
      const { nome, email, idade } = req.body;

      const paciente = await this.useCase.cadastrarPaciente({
        nome,
        email,
        idade,
      });

      //devolvemos uma resposta
      return res.status(201).json(paciente);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  }
}
