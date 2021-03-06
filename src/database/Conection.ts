import { Sequelize, Options } from "sequelize";

export default class Conection {
  private instance: Sequelize;
  private db_name: string;
  private db_user: string;
  private db_pass: string;
  private db_config: Options;

  constructor(
    dbName: string,
    dbUser: string,
    dbPass: string,
    dbConfig: Options
  ) {
    try {
      this.db_name = dbName;
      this.db_user = dbUser;
      this.db_pass = dbPass;
      this.db_config = dbConfig;

      this.instance = new Sequelize(dbName, dbUser, dbPass, dbConfig);
    } catch (err) {
      console.error("Error ao tentar uma conexão com banco dados");
      throw err;
    }
  }
  getInstance() {
    return this.instance;
  }
}
