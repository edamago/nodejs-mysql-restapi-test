import {Router} from 'express'
import {getPreguntas,getPreguntaUsuario,getPregunta,createPregunta,updatePregunta,deletePregunta} from '../controllers/pregunta.controller.js'
//ruta notificacions

const router = Router()

router.get('/preguntas',getPreguntas)

router.get('/preguntas/:id',getPregunta)

router.get('/preguntas/usuario/:id',getPreguntaUsuario)

router.post('/preguntas',createPregunta)

router.put('/preguntas/:id',updatePregunta)

router.delete('/preguntas/:id',deletePregunta)

export default router