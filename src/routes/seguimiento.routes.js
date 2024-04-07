import {Router} from 'express'
import {getSeguimientos,getSeguimiento,createSeguimiento,deleteSeguimiento,updateSeguimiento} from '../controllers/seguimiento.controller.js'


const router = Router()

router.get('/seguimientos',getSeguimientos)

router.get('/seguimientos/:id',getSeguimiento)

router.post('/seguimientos',createSeguimiento)

router.patch('/seguimientos/:id',updateSeguimiento)

router.delete('/seguimientos/:id',deleteSeguimiento)


export default router