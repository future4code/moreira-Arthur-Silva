import { InputPostDTO } from "../types/types";
import { BaseDataBase } from "./BaseDataBase";

export class PostData extends BaseDataBase{
    async createPost(input:InputPostDTO) {
        try {
            await this.connection("Posts")
                .insert(input)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async searchPostById(id:string) {
        try {
            const result = await this.connection("Posts")
                .select("*")
                .where("id", "=", id)
            return result    
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}