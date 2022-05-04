import { app } from './controller/app'
import { UserController } from './controller/UserController'

const useController = new UserController()

app.post("/signup", useController.signup)