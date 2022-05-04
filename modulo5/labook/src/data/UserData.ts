import { User } from "../types/types";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
    async insert(user:User){
        await this.connection("LaBook")
            .insert(user)
    }
    async getUserByEmail(email:string){
        const user = await this.connection("LaBook")
            .select("*")
            .where({email})
        if(!user){
            throw new Error("Usuario não encontrado!");  
        }
        return user[0].email    
    }
}