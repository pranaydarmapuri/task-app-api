import { config } from 'dotenv'
config()
import express from 'express'

import env from './utils/env'

import todoRoutes from './routes/todo.routes'


const app = express()

app.use('/', todoRoutes)

app.listen(env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log('API running at port:', env.PORT)
})