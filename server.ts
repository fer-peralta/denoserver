import {Application, config} from "./depts.ts"
import {userRouter} from "./routes/user.routes.ts"

const app = new Application()
const {PORT} = config()

app.use(userRouter.routes())

app.listen({port:Number(PORT)})
console.log(`Server listening in port ${PORT}`)