const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');



const app = express();
mongoose.connect('mongodb://Primeiro:primeiro@omnistack-shard-00-00-glddj.mongodb.net:27017,omnistack-shard-00-01-glddj.mongodb.net:27017,omnistack-shard-00-02-glddj.mongodb.net:27017/week10?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);

//Métodos HTTP: get, post, put, delete
//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (DAdos para criação ou alteração de um registro)

//MongoDB (Não-relacional)
