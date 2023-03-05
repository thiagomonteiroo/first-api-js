import express from "express"
import { getClients, addClient, updateClient, deleteCLient } from "../controllers/client.js"

const router = express.Router()

router.get('/', getClients)

router.post('/', addClient)

router.put('/:id', updateClient)

router.delete('/:id', deleteCLient)

export default router