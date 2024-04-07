import {Router} from 'express'
import {getSeguimientos,getSeguimiento,createSeguimiento,deleteSeguimiento,updateSeguimiento} from '../controllers/seguimiento.controller.js'


const router = Router()

router.get('/registros',getSeguimientos)

router.get('/registros/:id',getSeguimiento)

router.post('/registros',createSeguimiento)

router.patch('/registros/:id',updateSeguimiento)

router.delete('/registros/:id',deleteSeguimiento)


export default router