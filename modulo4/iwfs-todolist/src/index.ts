//IMPORTTACOES
import express, {Express, Request, Response} from 'express'
import knex from "knex";
import cors from 'cors'
import dotenv from "dotenv";


const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(cors());


/*---------------------------------------------------------- */
// estabelecer a conexão com o banco no index.ts:

export const connection = knex({
    client: "mysql",
    connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
  }
});

/*---------------------------------------------------------- */
let errorCode = 500
//ENDPOINT QUE CRIA USUARIO
app.post("/user", async (req:Request, res:Response) => {
    
    try {
        if(!req.body.name || !req.body.nickname || !req.body.email){
            errorCode = 400
            throw new Error("Error in the request");
        }    
        await connection.raw(`
            INSERT INTO users (id, name, nickname, email)
            VALUES(   
                "${Date.now().toString()}",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            );    
        `)    
        res.status(201).send("Created!")
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }  
})

//ESTE ENDPOINT BUSCA USUARIO PELO ID 
app.get("/user/:id", async (req:Request, res:Response) => {

    try {
        if(!req.params.id){
            errorCode = 400
            throw new Error("Error in request");
        }
        const result = await connection.raw(`
            SELECT id, nickname FROM users WHERE id = ${req.params.id};
        `)
        if(!result){
            errorCode = 400
            throw new Error("O usuario nao foi encontrado");
        }
        res.status(200).send(result[0])
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }
})

//ESTE ENDPOINT EDITA O USUARIO
app.put("/user/edit/:id", async (req:Request, res:Response) => {
    const name = req?.body.name
    const nickname = req?.body.nickname
    const email = req?.body.email

    try {
        if(!req.body){
            errorCode = 204
            throw new Error("Os campos não foram preenchidos corretamente");
        }
        await connection.raw(`
        UPDATE users
        SET 
        name = "${name}",
        nickname = "${nickname}",
        email = "${email}"
        WHERE id = ${req.params.id}
        `)
        res.status(202).send("Sucess")
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }
})
//ESTE ENDPOINT CRIA UMA TAREFA
app.post("/task", async (req:Request, res:Response) => {
    /* let date = req.body.date_Limit
    let dateAtt = date.split("/", 3) */
    try {
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.dateLimit ||
            !req.body.status || 
            !req.body.creatorUserId
        ){
            errorCode = 204
            throw new Error("Preencha os campos corretamente");   
        }
        await connection.raw(`
            INSERT INTO tarefas 
            VALUES
            (   
                ${Date.now().toString()},
                "${req.body.title}",
                "${req.body.description}",
                "${req.body.date_Limit}",
                "${req.body.status}",
                "${req.body.creator_User_Id}"
            )
        `)
        res.status(201).send("Sucess")
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }
})
//ESTE ENDPOINT PEGA A TAREFA PELO ID

app.get("/task/:id", async (req:Request, res:Response) =>{
    try {
        if(!req.params.id){
            errorCode = 400
            throw new Error("Não foi encontrado um pametro válido");
        }
        const result = await connection.raw(`
        SELECT 
        tarefas.id,
        tarefas.title,
        tarefas.description,
        tarefas.date_limit,
        tarefas.status,
        tarefas.creator_user_id,
        users.nickname 
        FROM tarefas JOIN users ON tarefas.id = ${req.params.id};
        `)
        res.status(200).send(result.flat(1)[0])
    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
})




/*---------------------------------------------------------- */
//CRIACAO DO SERVIDOR
import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
/*---------------------------------------------------------- */



/*
{
    "name":"Arthur kelvim",
    "nickname":"arthuzinho",
    "email":"kelvimarthur@gmail.com"
}


INSERT INTO users
VALUES
("01", "arthur kelvim","arthuzinho", "kelvimarthur@gmail.com");

*/ 


//RESOLVER PROBLEMAS

//1-) ENDPOINT DE EDITAR USUARIO ESTÁ DANDO PROBLEMA.