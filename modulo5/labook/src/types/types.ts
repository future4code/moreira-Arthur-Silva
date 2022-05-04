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