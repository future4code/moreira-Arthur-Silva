import { Request, Response } from 'express'
import { connection } from '../connection'
import { Authenticator } from '../services/GenerateToken';
import { comparePass } from '../services/HashPassword';

export async function login(
    req:Request,
    res:Response
):Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Os campos nao foram preenchidos corretamente!");
        }
        
        const [user] = await 
            connection("users_auth")
                .where({email})
        
        const [userPassDataBase] = await 
            connection("users_auth")
                .where({password})        
        
        const userPassword = comparePass(password, userPassDataBase)
        
        if(!user || !userPassDataBase || userPassword !== true){
            throw new Error("Os dados nao coincidem com os de nosso banco");
        }
        
        const token = new Authenticator().generateToken(email)
        
        res.status(200).send({"token de acesso":token})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}