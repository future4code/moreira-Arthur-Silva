import { Request, Response } from 'express'
import { connection } from '../connection'
import { generateId } from '../services/GenerateID'

async function SignUp(
    req:Request,
    res:Response
) {
    try {
        const { name, email, password } = req.body
        const id = generateId()

        const newUser = {
            id,
            name,
            email,
            password
        }
    } catch (error) {
        
    }
}


//uuid = usada para gerar ids unicos
//jsonwebtoken = usada para gerar tokens
//bcrypt = usada para encriptar senhas
