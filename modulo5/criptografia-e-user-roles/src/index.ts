import { HashManager } from "./services/HashManager";
import { Authorization } from "./services/NewToken";
import { AuthenticatorData } from "./types";
import { app } from './app'
import { RegisterUser } from "./endpoints/RegisterUser";
import { InfoUsers } from "./endpoints/InfoUser";
import { Login } from "./endpoints/Login";

app.post("/user/signup", RegisterUser)
app.post("/user/login", Login)

InfoUsers("oao@hotmail.com")










const newPassCryp:string = new HashManager().createHash("arthur12")
//console.log(newPassCryp)

const hashCompare = new HashManager().compareHash("arthur12", "$2b$10$Pyz1LD0ppmI4GCvcoN96BOIzPsAvSMsGtE/R.cgPluXVgtK7R/jXm")
//console.log(hashCompare)

/* const tokenId:AuthenticatorData = {
  id:"lukas"
} */
//const token = new Authorization().GenerateToken(tokenId)
//console.log(token)



