import { Router } from 'express'
import { enviarEmail } from '../controllers/email.controller.js'

const router = Router()

router.post('/', enviarEmail)

export default router
