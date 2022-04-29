import { Request, Response } from 'express'
import { connection } from '../connection'
import { Authenticator } from '../services/GenerateToken';

export async function getRecipe(
    req:Request,
    res:Response
) {
    try {
        const id:string = req.params.id
        const auth = req.headers.authorization as string

        const verifyAuth = new Authenticator().verifyToken(auth)
        console.log(verifyAuth)
        if (!verifyAuth) {
            throw new Error("Token inválido ou usuario nao foi verificado");
        }

        const result = await 
            connection("recipes")
                .select("id", "title", "description", "createDate")
                .where("id", "=", `${id}`)
        
        res.status(200).send(result)        
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
}