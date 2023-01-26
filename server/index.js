import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app = express()
dotenv.config()

const MONGO_URL  = process.env.MONGO_URL
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

async function start(){
	try{
		await mongoose.connect(MONGO_URL)
		app.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`))

	}catch(e){
		console.log(e)
	}
}

start()
