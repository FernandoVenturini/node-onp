// IMPORTANDO O EXPRESS E OS TIPOS NECESSÁRIOS
import express, { Request, Response } from 'express';

// IMPORTANDO AS ROTAS DA PAGINA routes.ts PRA ESSA PAGINA INDEX:
import router from './routes';

// IMPORTANDO dotenv
import dotenv from 'dotenv';

// IMPORTANDO O CORS:
import cors from 'cors';

// STARTANDO O dotenv:
dotenv.config();

// INICIANDO O EXPRESS NO SERVIDOR:
const server = express();

// AUTORIZANDO QUAL SITE E METODO PODE ACESSAR O SITE:
const corsOption = {
    origin: ["https://google.com"],
    methods: "GET, POST, PUT, DELETE"
}

// CONFIGURANDO O CORS:
server.use(cors(corsOption));

// AUTORIZANDO A ROTA
server.use(express.urlencoded({extended:true}));
server.use(router);

// SETANDO MENSAGEM DE ERRO:
server.use((req:Request, res:Response) => {
    res.status(404);
    res.json({Error: 'Route not found!'});
});


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}: http://localhost:${process.env.PORT}`);
});
