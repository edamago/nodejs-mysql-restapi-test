import {Router} from 'express'
import {getComentarios,getComentarioUsuario,getComentario,createComentario,updateComentario,deleteComentario} from '../controllers/comentario.controller.js'
//ruta notificacions

const router = Router()

router.get('/comentarios',getComentarios)

router.get('/comentarios/:id',getComentario)

router.get('/comentarios/usuario/:id',getComentarioUsuario)

router.post('/comentarios',createComentario)

router.put('/comentarios/:id',updateComentario)

router.delete('/comentarios/:id',deleteComentario)

export default router