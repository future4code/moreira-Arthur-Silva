import { User } from "../types/types";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
    async insert(user:User){
        await this.connection("LaBook")
            .insert(user)
    }
    async getUserByEmail(email:string){
        try {
            const user = await this.connection("LaBook")
            .select("*")
            .where({email})
        
            return user[0]
        } catch (error:any) {
            if(error instanceof Error){
                throw new Error(error.message);
            } else {
                throw new Error("erro no banco");
            }
        }    
    }
}
