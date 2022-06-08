
import { mySqlConection } from "../database";
import Conection from "../database/Conection";

export default class Pacientes{
    model: any;

    constructor(conexao: Conection){
        const con = conexao.getInstance();
        
    }
}