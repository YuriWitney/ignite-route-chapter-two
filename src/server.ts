import express from 'express'
import { categoryRoutes } from './routes/categories-routes'
import { specificationsRouter } from './routes/specifications-routes'

const app = express()

app.use(express.json())
app.use('/categories', categoryRoutes)
app.use('/specifications', specificationsRouter)

app.listen(3333, () => console.log('server is running on http://localhost:3333'))
