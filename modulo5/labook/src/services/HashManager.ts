import * as bcrypt from 'bcrypt'

export class HashManager {
    async hash(hash:string){
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(hash, salt)

        return result as string
    }
    async compare(pass:string, hash:string) {
        return bcrypt.compare(pass, hash)
    }
}