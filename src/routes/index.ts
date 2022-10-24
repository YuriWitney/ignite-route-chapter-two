import { Router } from 'express'
import { categoryRoutes } from './categories-routes'
import { specificationsRouter } from './specifications-routes'

export const router = Router()

router.use('/categories', categoryRoutes)
router.use('/specifications', specificationsRouter)
