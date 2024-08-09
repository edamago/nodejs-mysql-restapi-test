import {Router} from 'express'
import {getEstadosPosicionPedido} from '../controllers/estado_detalle_pedido.controller.js'
//ruta notificacions

const router = Router()

//router.get('/preguntas/:id',getPregunta)

router.get('/estadosposiciones/posicion/:id',getEstadosPosicionPedido)

//router.get('/posiciones/cliente/:id',getPosicionesCliente)
//router.post('/preguntas',createPregunta)

//router.put('/preguntas/:id',updatePregunta)

//router.delete('/preguntas/:id',deletePregunta)

export default router