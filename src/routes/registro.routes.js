import {Router} from 'express'
import {getRegistros} from '../controllers/registro.controller.js'


const router = Router()

router.get('/registros',getRegistros)


export default router