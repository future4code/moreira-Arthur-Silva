import { app } from './controller/app'
import { PostController } from './controller/PostController'
import { UserController } from './controller/UserController'

const useController = new UserController()
const postController = new PostController()

app.post("/signup", useController.signup)
app.post("/login", useController.loginController)

app.post("/post", postController.newPost)
app.get("/post/:id", postController.searchPostById)