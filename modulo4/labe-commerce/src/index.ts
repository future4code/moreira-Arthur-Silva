import { app } from './app'
import { createUser } from "./endpoints/createUser";
import { getUsers } from './endpoints/getUsers';


//AQUI FICA A CHAMADA DAS REQUISIÇÕES

app.post("/users", createUser)
app.get("/users", getUsers)
