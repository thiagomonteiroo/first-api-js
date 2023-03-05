import express from "express";
import userRoutes from "./routes/clients.js"

const app = express()

app.use(express.json())

app.use("/", userRoutes)


app.listen(3000, console.log('server is running'))