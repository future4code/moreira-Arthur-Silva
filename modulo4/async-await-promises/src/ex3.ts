import axios from 'axios'
import { URL_BASE } from "./baseURL";

type user = {
	id: string;
	name: string;
	email: string;
}

const returnSubscribersAF = async ():Promise<user[]> =>{
    const result = await axios.get(`${URL_BASE}/subscribers`);
    return result.data.map((item:any) => {
        return {
            id:item.id,
            email:item.email,
            name:item.name
        }
    })
}

const main = async() =>{
    returnSubscribersAF()
}
main()

//3-a)Não teremos, pois estamos tipando a saída com o que de fato o que a nossa funcao entrega.
//3-b)Apesar dela nao retornar nada, podemos tipar essa saída e também mapear, para que possamos ter acesso ao dado.
//3-c)Resposta acima.