import express from 'express'
import multer from 'multer'
import { createItem, getItem, deleteItem } from '../controllers/itemController.js'

const itemRouter = express.Router()

// Multer configuration for storing image uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, _file, cb) => cb(null, `${Date.now()} - ${_file.originalname}`)
})

const upload = multer({ storage })

// Routes
itemRouter.post('/', upload.single('image'), createItem)   
itemRouter.get('/', getItem)                              
itemRouter.delete('/:id', deleteItem)                      

export default itemRouter
