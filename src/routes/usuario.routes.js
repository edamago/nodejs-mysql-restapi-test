import {Router} from 'express'
import {getUsuarios,getUsuario,getUsuarioPorCorreo,createUsuario,updateUsuario,deleteUsuario} from '../controllers/usuario.controller.js'
//ruta notificacions

const router = Router()

router.get('/usuarios',getUsuarios)

router.get('/usuarios/:id',getUsuario)

router.get('/usuarios/correo/:id',getUsuarioPorCorreo)

router.post('/usuarios',createUsuario)

router.put('/usuarios/:id',updateUsuario)

router.delete('/usuarios/:id',deleteUsuario)

export default router