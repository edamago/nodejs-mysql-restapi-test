import {Router} from 'express'
import {getNotificaciones,getNotificacionUsuario,createNotificacion,updateNotificacion,deleteNotificacion,getNotificacion} from '../controllers/notificacion.controller.js'
//ruta notificacions

const router = Router()

router.get('/notificaciones',getNotificaciones)

router.get('/notificaciones/:id',getNotificacion)

router.get('/notificaciones/usuario/:id',getNotificacionUsuario)

router.post('/notificaciones',createNotificacion)

router.put('/notificaciones/:id',updateNotificacion)

router.delete('/notificaciones/:id',deleteNotificacion)

export default router