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