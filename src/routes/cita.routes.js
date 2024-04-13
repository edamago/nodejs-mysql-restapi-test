import {Router} from 'express'
import {getCitas} from '../controllers/cita.controller.js'

const router = Router()

router.get('/citas',getCitas)

export default router