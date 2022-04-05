import express from "express";
import { read } from "fs";

import { AddressInfo } from "net";
import { produtos } from "./data";

const app = express();

app.use(express.json());

/*------------------------------------------------------------------------------------------------------------*/
type ProdType = {
    id:number,
    name:string,
    price:number
}
//REQUISIÇÃO TESTE
app.get("/test", (req, res) => {
    res.status(200).send("A api está funcionando!")
})
//REQUISIÇÃO QUE CRIA NOVO PRODUTO
app.post("/criaprod", (req, res) => {

    let nome = req.body.name
    let price = req.body.price

    let produto:ProdType = {
        id:Date.now(),
        name:nome,
        price:price
    }

    if(
        typeof req.body.name === "string" && 
        typeof req.body.price === "number" &&
        req.body.price > 0 &&
        req.body.name && req.body.price
        ){
        let arrAtt = [...produtos, produto]
        res.status(201).send(arrAtt)
    } else if(typeof req.body.name !== "string"){
        res.status(400).send("No body da requisição(nome), é pedido uma string. Veja se ja passou uma string!")
    } else if(typeof req.body.price !== "number"){
        res.status(400).send("No body da requisição(price), é pedido um number. Veja se ja passou um number!")
    } else if(req.body.price <= 0){
        res.status(400).send("No body ra requisição(price), deve ser paassado um numero maior que 0(zero)!")
    } else if(!req.body.name){
        res.status(400).send("Não foi passado um nome no body da requisição")
    } else if(!req.body.price){
        res.status(400).send("Não foi passado um preço no body da requisição")
    } else{
        res.status(500).send("Erro interno do server")
    }

})
//REQUISIÇÃO QUE MOSTRA TODOS OS PRODUTOS
app.get("/allproducts", (req, res) => {
    res.status(200).send(produtos)
})

//REQUISIÇÃO QUE EDITA O PREÇO DE UM DETERMINADO PRODUTO
app.put("/produto/:id", (req, res) => {
    const id = Number(req.params.id)
    const body = req.body.price

    const verificaId = produtos.find((item) => {
        return id === item.id
    })

    if(
        req.body.price &&
        typeof req.body.price === "number" &&
        req.body.price > 0 && 
        verificaId){
            produtos.filter((item) => {
                return item.id === id
            })
            .map((item) => {
                item.price=body
                return item
            })
            //let arr = [...produtos, copiaArr]
            res.status(201).send(produtos)
    } else if(!req.body.price){
        res.status(400).send("Deve ser passado um valor numérico(ex: 3) no body da requisição")
    } else if(typeof req.body.price !== "number"){
        res.status(400).send("Deve ser passado um numero(ex: 3) no body(price) da requisição")
    } else if(req.body.price <= 0){
        res.status(400).send("Deve ser passado um numero que seja maior que 0 no body(price) da requisição")
    } else if(!verificaId){
        res.status(400).send("Deve ser passado um id válido no parâmetro da requisição")
    } else{
        res.status(500).send("Erro interno do servidor")
    }
})
//REQUISIÇÃO QUE DELETA UM PRODUTO 
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    const encontraProduto = produtos.find((item) => {
        return item.id === Number(id) 
    })
    
    if(encontraProduto){
        const produtoNu = produtos.filter((item) => {
            return item.id !== Number(id)
        })
        
        res.status(200).send(produtoNu)
    } else if (!encontraProduto){
        res.status(400).send("O id do produto digitado no parâmetro da requisição não foi encontrado :(")
    } else{
        res.status(500).send("Erro no servidor")
    }
})


/*------------------------------------------------------------------------------------------------------------*/ 
 

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});

