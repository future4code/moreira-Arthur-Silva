import { normalize } from "path"

export type AuthenticatorData = {
    id:string
}
export type User = {
    id:string
    name:string,
    email:string,
    password:string,
}
export type SignUpDTO = {
    name:string,
    email:string,
    password:string
} //AQUI SE CRIA UM OBJETO DE TRANSFERENCIA DE DADOS, TEM A VER COMO AS CAMADAS VÃO SE COMUNICAR ENTRE ELAS.
export type LoginDTO = {
    email:string,
    password:string
}
enum TypePost {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}
export type InputPostDTO ={
    photo:string,
    description:string,
    type:string
}
export type TokenDTO = {
    token:string
}
export type Post ={
    photo:string,
    description:string,
    type:string,
    id:string,
    date_create:string,
    creator_id:string
}