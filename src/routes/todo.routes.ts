import { Router } from 'express'

const router = Router()

router.all('/', (req, res) => {
  res.json({
    message: 'Hello Task API'
  })
})

export default router