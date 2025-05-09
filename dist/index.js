"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANDO O EXPRESS E OS TIPOS NECESSÁRIOS
const express_1 = __importDefault(require("express"));
// IMPORTANDO AS ROTAS PRA ESSA PAGINA INDEX:
const routes_1 = __importDefault(require("../routes"));
// INICIANDO O EXPRESS NO SERVIDOR:
const server = (0, express_1.default)();
server.use(routes_1.default);
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});
