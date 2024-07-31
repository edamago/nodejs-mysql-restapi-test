import {Router} from 'express'
import {getNotificaciones,createNotificacion,updateNotificacion,deleteNotificacion,getNotificacion} from '../controllers/notificacion.controller.js'


const router = Router()

router.get('/notificaciones',getNotificaciones)

router.get('/notificaciones/:id',getNotificacion)

router.post('/notificaciones',createNotificacion)

router.put('/notificaciones/:id',updateNotificacion)

router.delete('/notificaciones/:id',deleteNotificacion)

export default router