import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
dotenv.config()
import cookieParser from 'cookie-parser'
import connectDB from './config/connectDB.js'



const app = express()
app.use(cors({
   credentials: true,
   origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('combined'));
app.use(helmet({
   crossOriginResourcePolicy: false
}))
const PORT = 8080 || process.env.PORT
app.get("/", (request, response) => {
   ///server to client
   response.json({
      message: "Server is running" + PORT
   })

})
connectDB()

app.listen(PORT, () => {
   console.log("Server is Running at", PORT)
})