import { Request, Response } from 'express'
import { connection } from '../connection'
import { Authenticator } from '../services/GenerateToken';

export async function getOtherProfile(
    req:Request,
    res:Response
) {
    try {
        const id = req.params.id
        const authorization = req.headers.authorization as string
        const verifyAuth = new Authenticator().verifyToken(authorization)
        
        if(!id || !authorization || !verifyAuth){
            throw new Error("Os campos nao foram passados corretamente ou estao faltando");
        }
        
        const result = await connection("users_auth")
            .select("id", "name", "email")
            .where("id", "=", `${id}`)
        
        res.status(200).send(result)
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}