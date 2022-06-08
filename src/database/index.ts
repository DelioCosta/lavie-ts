import Conection from "./Conection";

const mySqlConection = new Conection("root", "root", "", {
  dialect: "mysql",
  port: 3306,
  host: "localhost",
});

const pssqlConection = new Conection("root", "root", "", {
  dialect: "postgres",
  port: 5506,
  host: "localhost",
});

export { mySqlConection, pssqlConection };
