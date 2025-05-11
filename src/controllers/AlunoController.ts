import { Request, Response } from 'express';

// IMPORTANDO AlunoService de AlunoService.ts
import AlunoService from '../services/AlunoService';

// INSTANCIANDO NOVA CLASSE:
const alunoService = new AlunoService();

class AlunoController {
    constructor () {

    } 

    getAll(req:Request, res:Response) {
        // Validar os dados

        // Enviar dados para o service
        const result = alunoService.getAll();
        res.json(result);
    }

    getById(req:Request, res:Response) {
        const result = alunoService.getById(req.params.id);
    }

    add(req:Request, res:Response) {
        // Validar dados
        // Limpar dados
        const result = alunoService.add(req.body);
        res.json(result);
    }

    update(req:Request, res:Response) {
        const result = alunoService.update(req.params.id, req.body);
        return res.json(result);
    }

    delete(req:Request, res:Response) {
        const result = alunoService.delete(req.params.id);
        res.json(result);
    }
}

export default AlunoController;