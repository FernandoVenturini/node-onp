// IMPORTANDO EMAILSERVICES DE EmailService.ts:
import EmailService from "./EmailService";

// IMPORTANDO IAluno de Alunos.ts
import { IAluno } from "models/Aluno";

// IMPORTANDO AlunoRepository de AlunoRepository.ts:
import AlunoRepository from '../repositories/AlunoRepository';

const emailService = new EmailService();

const alunoRepository  = new AlunoRepository();


class AlunoService {
    constructor () {

    }

    getAll(): IAluno[] {
        // Pede para o repository solicitar ao banco de dados todos os registros de alunos.
        return alunoRepository.getAll();
    }

    getById(id:string): IAluno {
        // Pedir para o repository solicitar ao banco de dados o registro do usuario que tenha o id que chegou na rota.
        return alunoRepository.getById(id);
    }

    add(data: IAluno): IAluno {
        // Verificar se o aluno ja existe(pedir informacao para o repository)
        // Se existir retorna erro
        // Se nao existir, solicita que o repository(que tem acesso ao banco de dados) faca a insercao deste aluno.
        // Enviar e-mail para o aluno
        emailService.sendEmailWelcomeStudent(data.email);
        return alunoRepository.add(data);
    }

    update(id:string, data: IAluno): IAluno {
        // Verificar se esse aluno existe (la no repository)
        // Se nao existir retorna erro
        // Se existir fazer alteracao (la no repository)
        return alunoRepository.update(id, data);
    }

    delete(id:string): string {
        // Verifica se esse aluno existe (repository)
        // Se nao existir retornar erro
        // Se existir fazer a exclusao (repository)
        return alunoRepository.delete(id);
    }
}

export default AlunoService;,jgjm