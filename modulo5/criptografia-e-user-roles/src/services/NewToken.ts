import * as jwt from 'jsonwebtoken'
import { AuthenticatorData } from '../types'

export class Authorization {

    GenerateToken(payload:AuthenticatorData) {
        return jwt.sign(
            {id:payload},
            "arthur",
            {
                expiresIn:"5h"
            }
        )
        //AQUI ESTAREI GERANDO UM TOKEN, QUE PASSEI COM A CHAVE CHAMADA "arthur"
    }
    GetTokenData(token:string){
        const tokenData = jwt.verify(
            token,
            "arthur"
        )
        return tokenData
        //AQUI IREI VERIFICAR O TOKEN E A SENHA QUE POR ENQUANTO É "arthur"
    }
} 