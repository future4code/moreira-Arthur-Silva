import { Authenticator } from "./services/GenerateToken";
import { AuthenticatorData } from "./types";

const dado:AuthenticatorData = {
    id:"laranjinha456"
}
const token = new Authenticator().genereteToken(dado)
console.log("your token:", token)

//const verify = new Authenticator().verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxhcmFuamluaGE0NTYiLCJpYXQiOjE2NTEwODg2ODksImV4cCI6MTY1MTEwNjY4OX0.qwdT51aHVJv5V0C3YOFIvseDWmkI5ak56ZPLlcf1Pkg")
//console.log(verify)