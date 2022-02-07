const Server = require('./Server')
const cors = require('cors');

const PORT = 5000;
const userRouter = require('./src/user-router')
const mongoose = require('mongoose')
const jsonParser = require('./parseJson')
const corsUrls = (process.env.CLIENT_URL || '*').split(',');

const app = new Server()

app.use(jsonParser)
// app.use(cors({
//     origin: (origin, cb) => cb(null, corsUrls.includes('*') || corsUrls.includes(origin)),
//     credentials: true,
// }))

app.addRouter(userRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://user:123@cluster0.3h2qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        app.listen(PORT,()=>console.log(`Server started on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

start()