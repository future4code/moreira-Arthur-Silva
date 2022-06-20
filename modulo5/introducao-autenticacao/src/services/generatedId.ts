import {v4} from 'uuid'

/* export async function newId(
    req:Request,
    res:Response
):Promise<any> {
    try {
        const id = v4()

        res.status(200).send(id)
    } catch (error) {
        res.status(200).send(error)
    }
} */
export function newId():string {
    return v4()
}