import { app } from "./app";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signup";
import { Authenticator } from "./services/GenerateToken";
import { comparePass, newPassword } from "./services/HashPassword";
import { AuthenticatorData } from "./types";

const dado:AuthenticatorData = {
    id:"laranjinha456"
}
const token = new Authenticator().generateToken(dado)
//console.log("your token:", token)

//const verify = new Authenticator().verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxhcmFuamluaGE0NTYiLCJpYXQiOjE2NTEwODg2ODksImV4cCI6MTY1MTEwNjY4OX0.qwdT51aHVJv5V0C3YOFIvseDWmkI5ak56ZPLlcf1Pkg")
//console.log(verify)
app.post("/signup", signUp)
app.post("/login", login)

//console.log(newPassword("85arthur"))
//console.log(comparePass("85arthur","$2b$10$cE9.YfE8YNv8UFA2BaDy6OrQCsNEHgx1wmATK/pc7F5gnrCNsXIHm"))

//console.log(newPassword("arthut123"))