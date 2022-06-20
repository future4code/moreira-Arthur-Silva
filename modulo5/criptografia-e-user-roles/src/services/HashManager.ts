import * as bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export class HashManager {
    createHash(
        plainText:string //AQUI ELE RECEBE A SENHA, OU O QUE ELE DESEJA ENCRIPTAR
    ){
        const saltRounds:number = Number(process.env.COST) //AQUI DIZEMOS A QUANTIDADE DE CARACTERES
        const salt:string = genSaltSync(saltRounds)  //AQUI CRIAMOS O SALT
        const hash:string = hashSync(plainText, salt) //AQUI ELE ARMAZENA A SUA SENHA HASHEADA(CRIPTOGRAFADA)

        return hash
    }
    compareHash(senhaPassada:string , hash:string){
        return compareSync(senhaPassada, hash)
    }

}
