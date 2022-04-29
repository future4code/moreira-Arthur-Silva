import { Request, Response } from 'express'
import { connection } from '../connection'
import { Authenticator } from '../services/GenerateToken';
import { comparePass } from '../services/HashPassword';

export async function getMyProfile(
    req:Request,
    res:Response
) {
    try {
        const token = req.headers.authorization as string
        const tokenDescriptado = new Authenticator().verifyToken(token)

        if(!token){
            throw new Error("Não foi passado um token de autorização");
        } 
        const result = await connection("users_auth")
            .select("id", "name", "email")
            .where({email:tokenDescriptado as string})
            /* .select("id", "name", "email")
            .where({email:tokenDescriptado}) */
        res.status(200).send(result)
    } catch (error:any) {
       res.status(400).send({error:error.message})
    }
}