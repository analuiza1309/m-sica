const mongoose = require('mongoose');

//schema são as propriedades que irão compor a estrutura do documento no banco de dados, aqui podemos definir os tipos de valores, nomes dos campos, entre outras configurações.

//New mongoose.Schema é o comando utilizado para que possamos criar um novo Schema do mongo, através do mongoose.

const LivroSchema = new mongoose.Schema({
    id : { type : Number,required:true},
    artista: { type: String,required:true },
    Genero: { type: String,required:true },
    album: { type: String,required:true },
    nome:  { type: String,required:true }
},{
    versionKey: false
});

const livros = mongoose.model('livros', LivroSchema);

module.exports = livros;

const mongoose = require('mongoose');

//schema são as propriedades que irão compor a estrutura do documento no banco de dados, aqui podemos definir os tipos de valores, nomes dos campos, entre outras configurações.

//New mongoose.Schema é o comando utilizado para que possamos criar um novo Schema do mongo, através do mongoose.

