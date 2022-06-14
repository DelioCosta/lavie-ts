import { Psicologos } from "../../models/Psicologos";
import IRepository from "../IRepository";

export default class PsicologosRepository implements IRepository {
  private psicologoModel: any;

  constructor(pacienteModel: Psicologos) {
    this.psicologoModel = pacienteModel.model;
  }

  create() {}
  update() {}
  find() {}
  async findAll() {
    return this.psicologoModel.findAll();
  }
  delete() {}
}
