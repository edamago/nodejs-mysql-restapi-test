import {Router} from 'express'
import {getActualizaciones,getActualizacionUsuario,getActualizacion,createActualizacion,updateActualizacion,deleteActualizacion} from '../controllers/actualizaciones.controller.js'
//ruta notificacions

const router = Router()

router.get('/actualizaciones',getActualizaciones)

router.get('/actualizaciones/:id',getActualizacion)

router.get('/actualizaciones/usuario/:id',getActualizacionUsuario)

router.post('/actualizaciones',createActualizacion)

router.put('/actualizaciones/:id',updateActualizacion)

router.delete('/actualizaciones/:id',deleteActualizacion)

export default router