import { UserData } from "../data/UserData";
import { GenerateID } from "../services/GenerateID";
import { LoginDTO, SignUpDTO, User } from "../types/types";
import { HashManager } from "../services/HashManager"
import { Authenticator } from "../services/GenerateToken";
import { AuthenticatorData } from "../types/types";

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
           
            //console.log("verifyuser",verifyUser)
            if(typeof verifyUser === "object"){
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
    async loginBusiness(input:LoginDTO){

        try {
            const { email, password } = input
            if(!email || !password){
                throw new Error("Preencha os campos corretamente");
            }
            
            const verifyUser = await new UserData().getUserByEmail(email)
            
            if(typeof verifyUser !== "object"){
                throw new Error("Não foi encontrado este usuario em nossa aplicação");
            }
            
            const compareHash = await new HashManager().compare(password, verifyUser.password)
            
            if(compareHash !== true){
                throw new Error("Sua senha esta incorreta");
            }
            
            const token = new Authenticator().generateToken({id:verifyUser.id})
            console.log("token", token)

            return token
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}