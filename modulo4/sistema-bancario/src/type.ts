export type TypeUsuario = {
    nome:string ,
    cpf:number,
    dataNascimento:string ,
    saldo: number,
    extrato: []
}

export type Transacoes = {
    valor:number,
    dataTransacao:string,
    descricao:string
}