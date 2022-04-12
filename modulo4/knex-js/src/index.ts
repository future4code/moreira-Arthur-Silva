//INSTALANDO OS MODULOS
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from "net";
import { createDecorator } from 'typescript';

dotenv.config()

//CRIANDO CONEXAO COM SERVIDOR 
export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multiStatements:true
  }
});
/* ------------------------------------------------------------------------ */
//INICIALIZACAO DOS MIDDLERS
const app: Express = express();
app.use(express.json());
app.use(cors());

//CRIACAO DO SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

/* ------------------------------------------------------------------------ */
//1-a)A resposta será exatamente o que está no banco de dados da aplicação.

//1-b)
app.get(`/actor/:name`, async (req, res) => {
    let name = req.params.name
    try {
        const result = await connection.raw(`
           SELECT * FROM Actor WHERE name = "${name}"
        `)
        res.status(200).send(result)
        throw new Error("error unexpected from current");
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
})
//1-c)
const contaAtores = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count
}
/* ------------------------------------------------------------------------ */
//2-a)
const alteraSalario = async (id: string, salary: number): Promise <any> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id", id)
}

//2-b)
const deletaAtor = async (id: string) : Promise <any> => {
    await connection("Actor")
    .delete()
    .where("id", id);
}
//2-c)
const mediaSalayAtores = async (gender: string) : Promise <any> => {
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})

    return result[0].average
}
/* ------------------------------------------------------------------------ */
//3-a)
app.get("/user/id-do-usuario", async (req: Request, res: Response) => {
    
    try {
      const id = req.params.id;
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE = "${id}"
      `)
  
      res.status(200).send(result)
      throw new Error("erro");
      
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
//3-b)
/* 
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

*/
//4-a)
/*
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
*/

