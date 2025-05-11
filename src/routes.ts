// IMPORTANDO ROUTER DO EXPRESS:
import { Router, Request, Response } from 'express';

// IMPORTANDO AlunoController da pasta AlunoController.ts
import AlunoController from './controllers/AlunoController';

// INSTANCIANDO ROUTER:
const router = Router();

// INSTANCIANDO UMA NOVA CLASSE(alunoController) DA PASTA AlunoController.ts
const alunoController = new AlunoController();

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

router.get('/',);

router.get('/aluno', alunoController.getAll); // BUSCA TODOS OS ALUNOS
router.get('/aluno/:id', alunoController.getById) // BUSCA UM ALUNO PELO ID
router.post('aluno', alunoController.add); // ADICIONAR UM NOVO ALUNO
router.put('/aluno/:id', alunoController.update); // EDITA OS DADOS DESSE ALUNO
router.delete('/aluno/:id', alunoController.delete); // EXCLUI O ALUNO

// METODO POST:
router.post('/painel/pijama', (req:Request, res:Response) => {
    const { nome, tamanho, cor, preco, quantidade_estoque } = req.body // Parametro usado pra pegar os dados via POST.

    return res.json({nome, tamanho, cor, preco, quantidade_estoque});
});

// METODO PUT:
router.put('/painel/pijama/:id', (req:Request, res:Response) => {
    const { nome, tamanho, cor, preco, quantidade_estoque } = req.body;
    const { id } = req.params;
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(400); // Fala qual status deu.
        return res.json({Error: 'Authorization is required!'});
    }

    return res.json({ id, Metodo: 'PUT', nome, tamanho, cor, preco, quantidade_estoque, authorization });
});

// METODO DELETE:
router.delete('/painel/pijama', (req:Request, res:Response) => {
    const { id } = req.body;

    return res.json({ metodo: 'DELETE', id});
});



// EXPORTANDO ROUTER PARA OUTRA PAGINA:
export default router;