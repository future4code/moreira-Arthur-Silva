import * as jwt from 'jsonwebtoken'
import { AuthenticatorData } from '../types'

/* function Authenticator(payload:AuthenticatorData) {
    jwt.sign(
        {id:payload},
        "arthur",
        {
            expiresIn:"5h"
        }
    )
}
function GetTokenData(token:string){
    const tokenDara = jwt.verify(
        token,
        "arthur"
    )
} */

class Auth {

    Authenticator(payload:AuthenticatorData) {
        jwt.sign(
            {id:payload},
            "arthur",
            {
                expiresIn:"5h"
            }
        )
    }
    GetTokenData(token:string){
        const tokenDara = jwt.verify(
            token,
            "arthur"
        )
    }
}