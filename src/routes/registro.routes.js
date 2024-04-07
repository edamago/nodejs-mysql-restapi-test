import {Router} from 'express'
import {getRegistros,getRegistro,createRegistro,updateRegistro,deleteRegistro} from '../controllers/registro.controller.js'

const router = Router()

router.get('/registros',getRegistros)

router.get('/registros/:id',getRegistro)

router.post('/registros',createRegistro)

router.patch('/registros/:id',updateRegistro)

router.delete('/registros/:id',deleteRegistro)


export default router