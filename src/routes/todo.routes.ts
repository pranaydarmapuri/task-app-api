import { Router } from 'express'
import env from '../utils/env'

const router = Router()

router.all('/', (req, res) => {
  res.json({
    message: 'Hello Task API running @ ' + env.PORT
  })
})

export default router