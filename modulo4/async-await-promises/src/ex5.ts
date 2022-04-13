import axios from "axios";
import { URL_BASE } from "./baseURL";


type user = {
    id:string,
    email:string,
    name:string,
}


//ISTO É UMA FUNÇÃO
const sendNotificationsForUsers = async (users: user[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${URL_BASE}/notifications`), {
                subscriberId: user.id,
                message
            }
        }
        console.log("Todas as notificaçoes foram enviadas")
    } catch (error) {
        console.log(error)
    }
}