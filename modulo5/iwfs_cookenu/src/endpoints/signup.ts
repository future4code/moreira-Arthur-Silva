import { Request, Response } from 'express'
import { connection } from '../connection'
import { generateId } from '../services/GenerateID'
import { Authenticator } from '../services/GenerateToken'
import { newPassword } from '../services/HashPassword'
import { AuthenticatorData, User } from '../types'

export async function signUp(
    req:Request,
    res:Response
) {
    try {
        const { name, email, password } = req.body
        const idToken:AuthenticatorData = {
            id:generateId()
        }

        const token = new Authenticator().generateToken(idToken)
        const hashPass = newPassword(password)

        const newUser:User = {
            id:idToken.id,
            name,
            email,
            password:hashPass
        }

        if(!name || !email || !password){
            throw new Error("Os campos nao foram preenchidos corretamente");
        } else if(newUser.password.length < 6){
            throw new Error("A sua senha dever ter no minimo 6 caracteres");
        } 

        await connection("users_auth")
            .insert(newUser)
        
        res.status(201).send({message:"usuario cadastrado com sucesso!", token:token})    
    } catch (error:any) {
        res.status(201).send({error:error.message})
    }
}
