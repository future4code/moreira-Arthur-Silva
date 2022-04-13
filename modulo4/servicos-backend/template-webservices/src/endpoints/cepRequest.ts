import axios from "axios";
import app from "../app";
import { connection } from "../data/connection";

//FUNCAO QUE RETORNA DADOS DO USUARIO
export const cepRequest = async (cep:string) => {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const infoUser = {
        cep: result.data.cep,
        logradouro: result.data.logradouro,
        numero: result.data.ddd,
        complemento: result.data.complemento,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
    
    console.log(infoUser)
    //return infoUser
    //https://viacep.com.br/ws/05424150/json/
    await connection.raw(`
        INSERT INTO adressUser
        VALUES (
            "${infoUser.cep}",
            "${infoUser.logradouro}",
            "${infoUser.numero}",
            "${infoUser.complemento}",
            "${infoUser.bairro}",
            "${infoUser.cidade}",
            "${infoUser.estado}",
        )
    `)
    
}
cepRequest("72115927")
//FcepRequest


//https://viacep.com.br/ws/72115927/json/



//: = path params
//? = query paramys