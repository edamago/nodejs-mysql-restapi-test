import {Router} from 'express'
import {getPedidos, getPedidosCliente} from '../controllers/pedido.controller.js'
//ruta notificacions

const router = Router()

router.get('/pedidos',getPedidos)

//router.get('/preguntas/:id',getPregunta)

//router.get('/posiciones/pedido/:id',getPosicionesPedido)

router.get('/pedidos/cliente/:id',getPedidosCliente)
//router.post('/preguntas',createPregunta)

//router.put('/preguntas/:id',updatePregunta)

//router.delete('/preguntas/:id',deletePregunta)

export default router