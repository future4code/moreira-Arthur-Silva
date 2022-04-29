import { Request, Response } from 'express'
import { connection } from '../connection'
import { Authenticator } from '../services/GenerateToken';
import { comparePass } from '../services/HashPassword';
import { AuthenticatorData } from '../types';

export async function login(
    req:Request,
    res:Response
):Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Os campos nao foram preenchidos corretamente!");
        }
        const [user] = await //AQUI EU ACESSO O BANCO E BUSCO O EMAIL COLOCADO NO BODY DA REQUISIÇÃO
            connection("users_auth")
                .where({email})   
                //user = senha hasheada
                //password = senha que foi colocada 
        if(!user){
            throw new Error("O email nao existe");
        }
        const userPassword = comparePass(password, user.password)//AQUI EU COMPARO O HASH QUE TENHO NO BANCO COM A
        //SENHA PASSADA NO BODY DA REQUISIÇÃO
        if(!user || userPassword !== true){ //AQUI EU VERIFICO SE USER EXISTE E SE A SENHA QUE FOI PASSADA
            //CONFERE COM O HASH QUE EU TENHO
            throw new Error("Os dados nao coincidem com os de nosso banco");
        }
        const tokenAuth:AuthenticatorData = {
            id:email
        }
        const token = new Authenticator().generateToken(tokenAuth)//AQUI EU GERO UM TOKEN 
        
        res.status(200).send({"token de acesso":token})//AQUI EU RETORNO O TOKEN PARA O USUARIO
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}