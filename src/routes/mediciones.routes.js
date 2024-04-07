import {Router} from 'express'
import {getMediciones,getMedicion,createMedicion,updateMedicion,deleteMedicion} from '../controllers/mediciones.controller.js'

const router = Router()

router.get('/mediciones',getMediciones)

router.get('/mediciones/:id',getMedicion)

router.post('/mediciones',createMedicion)

router.patch('/mediciones/:id',updateMedicion)

router.delete('/mediciones/:id',deleteMedicion)


export default router