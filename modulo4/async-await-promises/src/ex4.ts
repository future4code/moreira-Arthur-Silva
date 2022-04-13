import axios from "axios"
import { URL_BASE } from "./baseURL"

/* type news = {
    title:string,
    content:string,
    date:number,
}
 */

/* const body:{title:string, content:string, date:number} = {
    title:"felipe massa venceu",
    content:"grande felipe massa muito bom piloto",
    date:32321
}  */
async function createNews(
    title:string,
    content:string,
    date:number
): Promise<void> {
    await axios.put(`${URL_BASE}/news`, {
        title:title,
        content: content,
        date: date
    })
}

//4-a) é uma função do tipo void pois ele não espera retornar nada
//4-b) a função foi feita acima