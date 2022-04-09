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
        if(!req.body.name && !req.body.nickname && !req.body.email){
            errorCode = 400
            throw new Error("Error in the request");
        }    
        await connection.raw(`
            INSERT INTO users
            VALUES(   
                ${Date.now().toString()}
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