import { DataTypes } from "sequelize";

import Conection from "../database/Conection";

export class Pacientes {
  model: any;
  private modelName: string = "Pacientes";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.model = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        idade: {
          type: DataTypes.DATE,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
