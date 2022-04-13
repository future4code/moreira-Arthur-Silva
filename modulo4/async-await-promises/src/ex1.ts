import axios from 'axios'
import { URL_BASE } from "./baseURL";


async function returnSubscribers(): Promise<any[]> {
   const result = await axios.get(`${URL_BASE}/subscribers`);
   return result.data
}

//obs: se desejar ver o que sai do res, é somente dar console.log.
//1-a)Devemos usar get por que desejamos pegar os usuarios.
//1-b)Podemos chamar Promise(any[]) dentro da função.
//1-c)Acima.


const main = async() =>{
   await returnSubscribers()
}
main()



