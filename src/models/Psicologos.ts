import { DataTypes } from "sequelize";

import Conection from "../database/Conection";

export class Psicologos {
  model: any;
  private modelName: string = "Psicologos";

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
          senha: {
            type: DataTypes.STRING(300),
          },
          apresentacao: {
            type: DataTypes.STRING,
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
