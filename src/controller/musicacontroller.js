
const musicas = require  ("../model/musica.json");
const fs = require("fs");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { stringify } = require("querystring");

const getAll=(req,res)=>{
    console.log(req.url)
    res.status(200).send(musicas)
}


const getByID=(req,res)=>{
    const id = req.params.id

    const musicafiltrado=musicas.find(
        (musica)=>musica.id==id)
        res.status(200).send(musicafiltrado)
}


  const Postmusica = (req,res)=>{
  console.log(req.body);

    const{id,Artista,Genero,Nome,Album}= req.body;
    musicas.push({id,Artista,Genero,Nome,Album});

    fs.writeFile("./SRC/model.musica.json", JSON.stringify(musicas),'utf8',function(err){
        if(err){
            return res.status(24).send({message:err})
        }
        console.log("ARQUIVO ATUALIZADO COM SUCESSO")
    })

   res.status(200).send(musicas);
}

const deleteMusicas=(req,res)=>{

    try{
        const id=req.params.id;
        const musicasfiltrados= musicas.find((musica)=>musica.id==id);
        const index=musicas.indexOf(musicasfiltrados);
        musicas.splice(index,1);

        fs.writeFile("./src/model/musica.json",JSON.stringify(musicas),'utf8',function(err){
            if(err){
                return res.status(424).send({menssage:err});
            }
            console.log("Arquivo Excluido com Sucesso!");
        });

        res.status(200).send(musicas);

    }catch(err){
            console.log(err)
            return res.status(424).send({message:"Erro ao Deletar o Registro"})
    };
};

const putmusicas=(req,res)=>{
    try{
        //pega o id que foi passado
        const id=req.params.id;
        // filtra meu array de objetos para encontrar oobjeto requerido
        const musicaasermodificada=musicas.find((musica)=>musica.id == id);
        console.log( musicaasermodificada);

       // filtra o corpo da requisição com as alteraçoes
        const musicaatualizada = req.body;
        console.log(musicaatualizada)

        //index
        const index=musicas.indexOf(musicaasermodificada)
        console.log(index)

        //buscando no array o endereço, excluindo o registro antigo e substituindo pelo novo
        musicas.splice(index,1,musicaatualizada);
        console.log(musicas);

        fs.writeFile("./src/model/musica.json",JSON,stringify(musicas),'utf8',function(err){
            if (err){
                return res.status(424).send({massage: err });
            }
            console.log("Arquivo atualizado com sucesso!");
        });

    res.status(200).send(musicas);
     }catch(err){
        return res.status(424).send({message:err});
     }
}

const patchmusicas = (req, res) => {
    const id = req.params.id;
    const atualizacao = req.body;
    console.log(atualizacao)
  
    try {
      const musicaASerModificada = musicas.find((musica) => musica.id == id);
  
      //Ele vai buscar dentro do objeto tarefaASerModificada atributos em que o nome coincida com os do objeto atualizacao, e vai substituir o valor
  
      Object.keys(atualizacao).forEach((chave) => {
        musicaASerModificada[chave] = atualizacao[chave]
      })
  
      fs.writeFile("./src/model/musica.json", JSON.stringify(musicas), 'utf8', function(err) {
        if (err) {
          return res.status(424).send({ message: err});
        }
        console.log("Arquivo atualizado com sucesso!")
      });
  
      return res.status(200).send(musicas);
    } catch(err) {
      return res.status(424).send({ message: err });
    }
  }
module.exports={getAll, getByID,Postmusica,deleteMusicas,putmusicas,patchmusicas}


