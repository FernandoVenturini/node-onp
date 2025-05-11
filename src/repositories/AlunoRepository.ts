import { IAluno } from "models/Aluno";


class AlunoRepository {

    constructor() {

    }

    getAll(): IAluno[] {
        // SOLICITA AO BD QUE BUSQUE TODOS OS ALUNOS
        return [{ name: 'Fernando Venturini', email: 'contato@onp.com', phone: '12345678', password: '654321', cpf: '0987654321'}];
    }

    getById(id: string):IAluno {
        // SOLICITAR AO BD QUE BUSQUE ALUNO PELO ID
        return { name: 'Fernando', email: 'contato@onp.com', phone: '12345678', password: '654321', cpf: '0987654321'};
    }

    add(data: IAluno): IAluno{
        // SOLICITA AO BD QUE ADICIONE UM USUARIO
        return data;
    }

    update(id: string, data: IAluno): IAluno {
        // SOLICITA AO BD QUE ATUALIZE UM USUARIO PELO ID
        return data;
    }

    delete(id: string)  {
        // SOLICITA AO BD QUE EXCLUA UM USUARIO
        return id;
    }
}
export default AlunoRepository;