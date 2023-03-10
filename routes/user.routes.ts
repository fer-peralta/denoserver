import {Router} from "../depts.ts"
import {findUserAll, findUserById, createUser, updateUserById, deleteById} from "../controller/user.controller.ts" 

export const userRouter = new Router()
    .get("/users", findUserAll)
    .get("/users/:id", findUserById)
    .post("/users", createUser)
    .put("/users/:id", updateUserById)
    .delete("/users/:id", deleteById)