import axios from 'axios'
import { URL_BASE } from "./baseURL";

const returnSubscribersAF = async ():Promise<any[]> =>{
    const result = await axios.get(`${URL_BASE}/subscribers`);
    return result.data
}

const main = async() =>{
    returnSubscribersAF()
}
main()
//2-A)a diferença está que na função nomeada o "async" vem primeiro e na arrow function assincrona ela está 
//após a dupla de parenteses da propria função.
//2-B)a função está acima.
