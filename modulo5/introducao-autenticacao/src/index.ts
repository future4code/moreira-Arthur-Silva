import {app} from './app'
import { createUser } from './endpoints/createUser';
import { newId } from "./services/generatedId";

app.get("/newId", newId)
app.post("/newUser", createUser)

