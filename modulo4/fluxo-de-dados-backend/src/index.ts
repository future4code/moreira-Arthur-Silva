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

    let arrAtt = [...produtos, produto]

    res.status(201).send(arrAtt)

})
//REQUISIÇÃO QUE MOSTRA TODOS OS PRODUTOS
app.get("/allproducts", (req, res) => {
    res.status(200).send(produtos)
})

//REQUISIÇÃO QUE EDITA O PREÇO DE UM DETERMINADO PRODUTO
app.put("/produto/:id", (req, res) => {
    const id = Number(req.params.id)
    const body = req.body.price

    produtos.filter((item) => {
        return item.id === id
    })
    .map((item) => {
        item.price=body
        return item
    })
    //let arr = [...produtos, copiaArr]
    res.status(201).send(produtos)
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
        
        res.send(produtoNu)
    } else {
        throw new Error("Deu erro")
    }
})


/*------------------------------------------------------------------------------------------------------------*/ 

/*
export const produtos = [
   {id:1, name:"arroz", price:30},
   {id:2, name:"feijao", price:8},
   {id:3, name:"macarrao", price:7},
   {id:4, name:"farofa", price:6},
   {id:5, name:"azeitona", price:4},  
]

*/ 


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});

