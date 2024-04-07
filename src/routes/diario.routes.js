import {Router} from 'express'
import {getDiarios,getDiario,createDiario,deleteDiario,updateDiario} from '../controllers/diario.controller.js'

const router = Router()

router.get('/diarios',getDiarios)

router.get('/diarios/:id',getDiario)

router.post('/diarios',createDiario)

router.patch('/diarios/:id',deleteDiario)

router.delete('/diarios/:id',updateDiario)


export default router