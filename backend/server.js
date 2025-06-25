import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';

import path from 'path'
import { fileURLToPath } from 'url';

import userRouter from './routes/userRoute.js'
import itemRouter from './routes/itemRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

import { Error } from 'mongoose';

const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(cors({
    origin: (origin, callback) => {
            const allowedOrigins = ['https://food-delivery-frontend-7m0t.onrender.com','https://food-delivery-admin-v00d.onrender.com'];
            if(!origin || allowedOrigins.includes(origin)){
                callback(null,true)
            }

            else{
                callback(new Error('not allowed by cors'))
            }
    },
    credentials: true,

}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//database
connectDB()

//routes
app.use('/api/user', userRouter)
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use('/api/items', itemRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)

app.get('/',(req,res)=>{
    res.send('api working')
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})