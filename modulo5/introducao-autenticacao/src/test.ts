import { Request, Response} from 'express'

/* export async function Test(
    req:Request,
    res:Response
):Promise<void> {
    
    const errorCode = 500
    const test = "Que o seu dia seja radiante!!"

    try {
        if(!test){
            throw new Error(`resquest error ${errorCode}`);
        }
        res.status(200).send(test)
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }
} */

export function Test():void {
    
    const errorCode = 500
    const test = "Que o seu dia seja radiante!!"

    try {
        if(!test){
            throw new Error(`resquest error ${errorCode}`);
        } else{
            console.log(test)
        }
        
    } catch (error:any) {
        console.log({message:error.message})
    }
}
Test()