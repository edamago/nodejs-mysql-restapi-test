import {Router} from 'express'
import {getPosiciones,getPosicionesPedido} from '../controllers/detalle_pedido.controller.js'
//ruta notificacions

const router = Router()

router.get('/posiciones',getPosiciones)

//router.get('/preguntas/:id',getPregunta)

router.get('/posiciones/pedido/:id',getPosicionesPedido)

//router.post('/preguntas',createPregunta)

//router.put('/preguntas/:id',updatePregunta)

//router.delete('/preguntas/:id',deletePregunta)

export default router