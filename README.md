# api-node-express-mongo-baltaio

# Passo 01

yarn init -y

yarn add express http debug

- express (web framework for node)
- http (enables the creation of a http server)
- debug (allow you to toggle the debug output for different parts of your module as well as the module as a whole)
    - https://www.coreycleary.me/using-the-debug-module-to-avoid-polluting-your-application-logs-with-logs-from-node-modules/
    - DEBUG=server:info ./node_modules/nodemon/bin/nodemon.js ./bin/server.js
    - DEBUG=server:error ./node_modules/nodemon/bin/nodemon.js ./bin/server.js

yarn add nodemon -D
    - nodemon (automatically restarting the node application when file changes)

node ./bin/server.js

# Passo 02

yarn add body-parser
    - Parse incoming request bodies in a middleware before your handlers, available under the req.body property

# Passo 03

- instalar studio 3t
    - Studio 3T is the professional GUI and IDE for MongoDB available for Windows, Mac, and Linux. Explore and manage your data faster with features like query building, data exploration, aggregation and data comparison, import/export, code generation, and more

yarn add mongoose
    - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment

# ... criação de rotas, controllers, models, repositories

# Pacotes

- yarn add guid
    - Utilizado para gerar IDs
- yarn add md5
    - Utilizado para encriptar as senhas com MD5

# Envio de e-mail

- Acessar site do Sendgrid
- Logar na conta e buscar por Settings > API Keys
    - Create API Key
    - Full access
- inserir chave gerada no config.js
- yarn add sendgrid@2.0.0
- criar serviço que chama método de envio de email no sendgrid
- importar email-service no controller e consumir serviço

# Autenticação

- podemos passar o token no Header, no Body ou como Query String

1. yarn add jsonwebtoken@7.4.0
2. criar auth-service.js com os métodos básicos
    - gerar token
    - decodificar token
    - autorizar (interceptador de rotas)
3. registrar rota para autenticação
4. criar métodos no controller e repositório para autenticar usuário e retornar o token
5. proteger as rotas utilizando o método authorize() como interceptador

6. armazenamos o Id do usuário no Token, para tornar mais seguras as futuras chamadas onde precisamos passar o Id do usuário logado
    - como a informação está contida no token JWT, não passamos o Id ou Email do usuário no corpo da requisição, e a responsabilidade de identificar o usuário logado é do decodeToken()

7. definir os diferentes papéis que terão acesso a aplicação (customer-model.js)
8. criar método isAdmin no auth-service.js
9. atualizar controller para criar usuário com nova informação de role, e também para retornar token (authenticate e refresh) com o novo campo roles
10. atualizar as rotas com o novo método que só deixa acessar quando usuário é admin