import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/GenerateId";
import { Authenticator } from "../services/GenerateToken";
import { USER_ROLES } from "../types/types";

/*
BREVE RESUMO SOBRE "BUSINESS": 
    AQUI FICA A PARTE DE VALIDAÇÃO E INSERÇÃO/DELETE/UPDATE DOS ENDPOINTS, RESUMINDO,
    AQUI FICA A PARTE DAS AÇOES A SEREM EXECUTADAS. É TAMBÉM AQUI ONDE FICAR GUARDADA A LÓGICA 
    DO SEU CÓDIGO.
*/ 
const userDB = new UserDataBase();


export class CreateBusiness {
    async createUser(id:string, name:string, email:string, password:string, role:USER_ROLES){
        
        if(!name || !email || !password || !role){
            throw new Error("Os campos nao foram passados corretamente");   
        }
        
        await userDB.createUser({
            id,
            name,
            email,
            password,
            role: USER_ROLES.NORMAL
        })
    }
    async LoginBusiness(email:string, password:string) {
        
        if(!email || !password){
            throw new Error("Os campos nao foram preenchidos corretamente");
        }

        await userDB.loginUser(email)
    }
    async getAllUsersBusiness(token:string) {

        const verify = new Authenticator().verifyToken(token)
        
        if(verify === "Não foi encontrado um token"){
            return("Não foi encontrado token, ou encontra-se expirado"); 
        }

    }
}
