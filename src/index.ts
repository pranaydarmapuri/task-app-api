import express from 'express'

import todoRoutes from './routes/todo.routes'

const port = process.env.PORT || 8080

const app = express()

app.use('/', todoRoutes)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('API running at port:', port)
})