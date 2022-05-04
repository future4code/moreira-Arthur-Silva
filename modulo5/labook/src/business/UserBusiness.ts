import { UserData } from "../data/UserData";
import { GenerateID } from "../services/GenerateID";
import { SignUpDTO, User } from "../types/types";
import { HashManager } from "../services/HashManager"
import { Authenticator } from "../services/GenerateToken";

export class UserBusiness {
    async signUp(input:SignUpDTO){
        try {
            //desestruturação de "input"
            const {name, email, password} = input
            //validação
            if(!name || !email || !password){
                throw new Error("Os campos nao foram preenchidos corretamente");
            }
            //conferir se o usuario existe
            const verifyUser = await new UserData().getUserByEmail(email)
            //console.log("verifyuser",verifyUser.length)
            if(verifyUser){
                throw new Error("O usuario ja existe em nossa aplicação");
            }
            //criar um id pro usuario
            const id = new GenerateID().newID()

            //hashear a senha do usuario
            const hashPass = await new HashManager().hash(password)
            
            //criar o usuario no banco
            const newUser:User = {
                id,
                name,
                email,
                password:hashPass
            }
            await new UserData().insert(newUser) 
            //criar o token
            const tokenUser = new Authenticator().generateToken({id:id})
            //retorno o token para o usuario
            console.log("seu token",tokenUser)
            return tokenUser
        } catch (error:any) {
            return {error:error.message}
        }
    }
}