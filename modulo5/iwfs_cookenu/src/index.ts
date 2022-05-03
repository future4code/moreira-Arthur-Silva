import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getMyProfile } from "./endpoints/getMyProfile";
import { getOtherProfile } from "./endpoints/getOtherProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signup";

/* const dado:AuthenticatorData = {
    id:"laranjinha456"
}
const token = new Authenticator().generateToken(dado) */
//coment
app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getMyProfile)
app.get("/user/:id", getOtherProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)



