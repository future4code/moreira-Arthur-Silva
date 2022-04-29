import * as bcrypt from 'bcrypt'

export function newPassword(dado:string):string {
    
    const rounds = Number(process.env.BCRYPT_COST); //RELACIONADO AO TEMPO DE EXECUÇÃO E A SEGURANÇA DA SENHA QUE SERÁ ENCRIPTADA.
    const salt = bcrypt.genSaltSync(rounds) //AQUI ELE IRÁ RECEBER "ROUNDS" E ENTÃO GERAR UMA STRING ALEATORIA ANTES DE CRIAR A SENHA "HASHEADA"
    const result = bcrypt.hashSync(dado, salt)

    return result
}

export function comparePass(pass:string, hash:string) {
    return bcrypt.compareSync(pass, hash)
}

