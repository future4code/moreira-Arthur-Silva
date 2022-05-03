import { BaseDataBase } from "./BaseDataBase";
import { PayLoad, User } from '../types/types'

  /* BREVE RESUMO:
        AQUI SERÁ EFETUADO O ACESSO AO BANCO DE DADOS. GUARDA-SE TAMBÉM A LÓGICA DAS QUERIES E TAMBÉM A 
        ESTRUTURA DE DADOS DA COMUNICAÇÃO COM O BANCO.
  */

export class UserDataBase extends BaseDataBase  {
    async getUserByEmail(email:string) {
        const result = await this.connection("User_Arq")
            .select("id", "role")
            .where({email})
            return {id: result[0].id, role: result[0].role}
    }
    async createUser(user:User){
        await this.connection("User_Arq")
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role:user.role
            })
    }
    async loginUser(email:string) {
        
        try {
            const result = await 
            this.connection("User_Arq")
                .select("*")
                .where({email})
        
            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    async getAllUsers() {
        try {
            const result = await
            this.connection("User_Arq")
                .select("*")
            return result    
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}