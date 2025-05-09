"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANDO ROUTER DO EXPRESS:
const express_1 = require("express");
// INSTANCIANDO ROUTER:
const router = (0, express_1.Router)();
// CRIANDO ROTAS:
router.get("/", (req, res) => {
    return res.json({ Teste: 'Testando' });
});
// CRIANDO ROTA GET:
router.get('/criancas/:id_pijama', (req, res) => {
    const id_pijama = req.params.id_pijama;
    return res.json({ id: 150, Nome: 'Pijama ONP' });
});
// EXPORTANDO ROUTER PARA OUTRA PAGINA:
exports.default = router;
