import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategory'

export const categoryRoutes = Router()

categoryRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})
