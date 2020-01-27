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