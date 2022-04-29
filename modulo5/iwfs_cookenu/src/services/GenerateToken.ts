import * as jwt from 'jsonwebtoken'
import { AuthenticatorData } from '../types'
import dotenv from 'dotenv'

dotenv.config();

export class Authenticator {
    generateToken(data:AuthenticatorData):string{ //O DADO ESPERADO É 
        const token = jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {
                expiresIn:"24h"
            }
        )
        return token
    }

    verifyToken(token:string){
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )as jwt.JwtPayload
                
            return tokenData.id 
        } catch (error) {
            return "Não foi encontrado um token"
        }
    }
}