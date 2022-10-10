import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository'

export const categoryRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
  
})

categoryRoutes.get('/', (request, response) => {
  return response.status(200).json(categoriesRepository.list())
})
