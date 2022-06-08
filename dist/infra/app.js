"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.defaultPort = 4000;
        this.instance = (0, express_1.default)();
    }
    setup(port) {
        const selectedPort = port ? port : this.defaultPort;
        this.instance.use(express_1.default.json());
        this.instance.listen(selectedPort, () => console.log(`Servidor rodando na porta: ${selectedPort}`));
    }
}
exports.default = App;
