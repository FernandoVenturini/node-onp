### INSTALANDO NODEMON
    * yarn init 
    * yarn add nodemon 
    * yarn global add nodemon (instala de forma global na maquina);

### EXPRESS
    * Microframework que organiza as rotas e cria um servidor para ser escrito o Backend.

### INSTALANDO O EXPRESS    
    * yarn add express

### INSTALANDO OS TYPES DO EXPRESS  
    * yarn add @types/express -D

### INSTALANDO BIBLIOTECA QUE FAZ A COMPILACAO TYPESCRIPT PARA O NODE 
    * yarn add ts-node -D
    * yarn add typescript -D

### INSTALE ts-node:
    * Globalmente (recomendado para conveniência):
        * Abra seu terminal e execute: 
            - npm install -g ts-node typescript
            - Ou se estiver usando o yarn:
                - yarn add --dev ts-node typescript
            - O typescript também é necessário para que o ts-node funcione corretamente.

    * Localmente (como uma dependência de desenvolvimento do seu projeto):
        * Navegue até a raiz do seu projeto (~/Área de Trabalho/node-onp) no terminal e execute:
            - npm install --save-dev ts-node typescript

### Configure o Nodemon para usar ts-node explicitamente:
    * A maneira mais confiável de executar arquivos TypeScript com Nodemon é configurar um script no seu arquivo package.json.
        - Navegue até a raiz do seu projeto (~/Área de Trabalho/node-onp) no terminal.
        - Abra o arquivo package.json no seu editor de código.
        - Localize a seção "scripts". Se não existir, crie-a.
        - Adicione ou modifique um script para executar seu arquivo index.ts com ts-node. 
        - Por exemplo:
            {
                "name": "seu-projeto",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "start": "node dist/index.js",  // Se você já estiver transpilando para JavaScript
                    "dev": "nodemon --exec ts-node src/index.ts",
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "devDependencies": {
                    // Se você instalou ts-node localmente, ele estará aqui
                    "nodemon": "^3.1.9",
                    "typescript": "^[sua versão do typescript]"
                },
                "dependencies": {
                    // Suas outras dependências
                    "ts-node": "^[sua versão do ts-node]" // Se você instalou ts-node localmente
                }
            }

### STARTANDO PROJETO COM yarn  
    * yarn dev

### INSTALANDO DEPENDENCIA DAS VARIAVEIS DE AMBIENTE (.env):
    - yarn add dotenv

### INSTALANDO CORS
    - npm install cors

    * INSTALANDO OS TYPES:
        - npm install @types/cors

### DESIGN PATERNS - MVC (MODEL/VIEW/CONTROLLER):
    * CSMR (CONTROLLERS/SERVICES/MODELS/REPOSITORIES);
        - RECEBE DADOS PELAS ROTAS
        - VALIDAR DADOS
        - FILTRAR DADOS- FAZER UP;OAD DE IMAGEM
        - ENVIAR E-MAIL
        - CRIA-SE A ROTASESSA ROTA RECEBE UMA CHAMADA COM DADOS
        - VALIDAR ESSES DADOS
        - SALVAR ESSES DADOS NO BANCO DE DADOS(BD)
        - RESPONDER COM "ERRO" OU "SUCESSO"

        - EXEMPLIFICANDO:
            - ROTAS - ROTAS (RESPONSABILIDADE DAS ROTAS: So recebe os dados e manda pro CONTROLLER valida);
            - VALIDADOR - CONTROLLER
            - UM SERVICO QUE FAZ UMA ACAO DESEJADA (CALCULAR UMA EQUACAO, ENVIAR UM E-MAIL) - FILTRA OS DADOS - SERVICE
            - UM MODELO DE DADOS A SEREM GUARDADOS (nome, e-mail, cpf) - MODELS
            - SALVAR ALGO NO BANCO DE DADOS (BD) - REPOSITORIES
            - DEVOLVER RESPOSTA - ROTA / CONTROLLER

    * ESSA E A ESTRUTURA: 
        - ROTA(recebe os dados e envia para os controllers) -> CONTROLLER(faz a validacao dos dados) -> SERVICE -> MODEL -> REPOSITORY
    
    * SEPARACAO BEM ORGANIZADA DE PASTAS E NOMES DE ARQUIVOS:
        * REPONSABILIDADE: GERIR ALUNOS
            - CONTROLLER:
                - CRIAR PASTA CHAMADA CONTROLLERS (alunosController.ts)
            - SERVICE:
                - CRIAR PASTA CHAMDA SERVICES (alunosServices.ts)
            - MODEL:
                - CRIAR PASTA CHAMAAD MODELS (alunos.ts)
            - REPOSITORIES:
                - CRIAR PASTA CHAMADA REPOSITORIES (alunosRepositories.ts)


### MODELS
    * RESPONSABILIDADE DE UM MODELS:
        -> MODELAR DADOS:    
            -> nome, e-mail, phone, cpf, address, gender(M x F);
        -> MODELAR BANCO DE DADOS(BD):
            -> id, nome, e-mail, phone, cpf, gender(M x F)

### REPOSITORIES
    * RESPONSABILIDADES DE UM REPOSITORY:
        -> MANIPULAR BANCO DE DADOS (QUALQUER BANCO DE DADOS, DOIS AO MESMO TEMPO, 4, 5, 10 BD);
        -> ELE NAO PROCESSA DADOS, APENAS SOLICITA AO BD;

    * FLUXO DE API:
        -> ROTA
        -> CONTROLLER
        -> SERVICE
        -> REPOSITORY

    * CADASTRO DE ALUNO:
        -> RECEBO DADOS NA ROTA;
        -> ENVIO PARA O CONTROLLER VALIDAR;
        -> ENVIA DADOS PARA O SERVICE;
        -> O SERVICE SOLICITA AO REPOSITORY QUE PERGUNTE AO BD SE AQUELE E-MAIL QUE O ALUNO INFORMOU EXISTE;
        -> O REPOSITORY PERGUNTA AO BD;
        -> O BD RESPONDE;       
        -> O REPOSITORY APENAS RETORNA O QUE O BD RESPONDEU;
        -> O SERVICE ANALISA O QUE O BD RESPONDEU;
        -> FAZ OU NAO A INSERCAO DOS DADOS, INSERI CASO NAO EXISTIR, NAO INSERE CASO EXISTIR;
        -> EXISTINDO O SERVICE ENVIA PARA O REPOSITORY UMA SOLICITACAO DE INSERCAO NO BD;
        -> O REPOSITORY PEDE AO BD QUE INSIRA O ALUNO;
        -> RETORNA STATUS TRUE CASO O BD TIVER RETORNANDO OK PARA A INSERCAO;
        -> O SERVICE ENVIA E-MAIL PARA O ALUNO;
        -> NAO DEVO USAR O MESMO SERVICE DE ALUNOS PARA FAZER O ENVIO, PQ ESTA NAO E  A FUNCAO DELE;
        -> DEVO CRIAR OUTRO SERVICE QUE ERESPONSAVEL APENAS POR ENVIOS DE E-MAIL;
        -> DEVO CHAMAR ESTE SERVICE DE ENVIO DE E-MAILS NO SERVICE DE ADICIONAR ALUNO;
        -> SOLICITANDO QUE O SERVICE DE E-MAILS FACA UM DISPARO PARA E-MAIL DO ALUNO;
        -> O SEICE DE ADICIONAR ALUNO RETORNA PARA O CONTROLLER A RESPOSTA;
        -> O CONTROLLER RETORNA PARA A ROTA;
        -> O EXPRESS RETORNA PARA O CLIENTE;
