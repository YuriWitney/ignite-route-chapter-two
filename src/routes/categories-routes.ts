import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository'
import { CreateCategoryService } from '../modules/cars/services/create-category-service'

export const categoryRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

categoryRoutes.get('/', (request, response) => {
  return response.status(200).json(categoriesRepository.list())
})
