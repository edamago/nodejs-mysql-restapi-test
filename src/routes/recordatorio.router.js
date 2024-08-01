import {Router} from 'express'
import {getRecordatorios,getRecordatorio,getRecordatorioUsuario,createRecordatorio,updateRecordatorio,deleteRecordatorio} from '../controllers/recordatorio.controller.js'
//ruta notificacions

const router = Router()

router.get('/recordatorios',getRecordatorios)

router.get('/recordatorios/:id',getRecordatorio)

router.get('/recordatorios/usuario/:id',getRecordatorioUsuario)

router.post('/recordatorios',createRecordatorio)

router.put('/recordatorios/:id',updateRecordatorio)

router.delete('/recordatorios/:id',deleteRecordatorio)

export default router