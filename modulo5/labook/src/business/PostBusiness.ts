import { PostData } from "../data/PostData";
import { UserData } from "../data/UserData";
import { GenerateDate } from "../services/Date";
import { GenerateID } from "../services/GenerateID";
import { Authenticator } from "../services/GenerateToken";
import { Post, InputPostDTO } from "../types/types";

export class PostBusiness {
    async newPost(input:InputPostDTO, token:any) {
        try {
            const {photo, description, type} = input
            if(!photo || !description || !type || !token){
                throw new Error("Preencha os campos corretamente");
            }
            
            const verifyToken = new Authenticator().verifyToken(token)
            
            if(!verifyToken){
                throw new Error("Usuario não verificado ou tempo de tela expirado");
            }
            const creator_id = verifyToken.id 

            const id = new GenerateID().newID()
            const date_create = new GenerateDate().date()
            
            const postReformed:Post = {
                id,
                photo,
                description,
                date_create,
                type,
                creator_id
            }
            await new PostData().createPost(postReformed)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async searchPostById(id:string) {
        try {
            const idUser:string = id

            if(!id){
                throw new Error("Preencha os campos corretamente");
            }
            const returnAllOfPost = await new PostData().searchPostById(idUser)
            //console.log("returnAllOfPost",returnAllOfPost[0].date_create)
            
            return returnAllOfPost

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}