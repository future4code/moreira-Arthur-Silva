import {app} from "./controller/app"
import {CreateController} from './controller/CreateUser_Controller'

const createController = new CreateController();

app.post("/signup", createController.createUser)
app.post("/login", createController.LoginController)
app.get("/all", createController.GetAllUsersController)
