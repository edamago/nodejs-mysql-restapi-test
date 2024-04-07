import {Router} from 'express'
import {getDiarios,getDiario,createDiario,deleteDiario,updateDiario} from '../controllers/diario.controller.js'

const router = Router()

router.get('/diarios',getDiarios)

router.get('/diarios/:id',getDiario)

router.post('/diarios',createDiario)

router.patch('/diarios/:id',updateDiario)

router.delete('/diarios/:id',deleteDiario)


export default router