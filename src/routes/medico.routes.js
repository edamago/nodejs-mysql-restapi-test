import {Router} from 'express'
import {getMedicos,getMedico,createMedico,updateMedico,deleteMedico} from '../controllers/medico.controller.js'

const router = Router()

router.get('/medicos',getMedicos)

router.get('/medicos/:id',getMedico)

router.post('/medicos',createMedico)

router.patch('/medicos/:id',updateMedico)

router.delete('/medicos/:id',deleteMedico)


export default router