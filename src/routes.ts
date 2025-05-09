// IMPORTANDO ROUTER DO EXPRESS:
import { Router, Request, Response, response } from 'express';

// INSTANCIANDO ROUTER:
const router = Router();

// CRIANDO ROTAS:
//router.get("/", (req: Request, res: Response) => {
//    return res.json({Teste: 'Testando'});
//});

// CRIANDO ROTA GET:
router.get('/criancas/:id_pijama', (req:Request, res:Response) => {
    const id_pijama = req.params.id_pijama;
    const { tamanho, cor } = req.query; // Extrai dados de dentro do array(tamanho e cor).
    
    return res.json({id_pijama, tamanho, cor});
});

// http:localhost:3000/criancas/350?tamanho=P&cor=blue

// METODO POST:
router.post('/painel/pijama', (req:Request, res:Response) => {
    const { nome, tamanho, cor, preco, quantidade_estoque } = req.body // Parametro usado pra pegar os dados via POST.

    return res.json({nome, tamanho, cor, preco, quantidade_estoque});
});

// METODO PUT:
router.put('/painel/pijama/:id', (req:Request, res:Response) => {
    const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;
    const { id } = req.params;

    return res.json({ id, Metodo: 'PUT', nome, tamanho, cor, preco, quantidade_estoque });
});

// METODO DELETE:
router.delete('/painel/pijama', (req:Request, res:Response) => {
    const { id } = req.body;

    return res.json({ metodo: 'DELETE', id});
});



// EXPORTANDO ROUTER PARA OUTRA PAGINA:
export default router;