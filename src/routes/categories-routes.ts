import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

export const categoryRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response) => {
  return response.status(200).json(categoriesRepository.list())
})
