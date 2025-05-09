// IMPORTANDO O EXPRESS E OS TIPOS NECESSÁRIOS
import express from 'express';

// IMPORTANDO AS ROTAS DA PAGINA routes.ts PRA ESSA PAGINA INDEX:
import router from './routes';

// INICIANDO O EXPRESS NO SERVIDOR:
const server = express();

// AUTORIZANDO A ROTA
server.use(express.urlencoded({extended:true}));
server.use(router);


server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});
