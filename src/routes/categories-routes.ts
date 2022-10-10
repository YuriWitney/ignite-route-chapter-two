import { Router } from 'express'
import { CategoriesRepository } from '../repositories/categories-repository'

export const categoryRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists !== undefined) {
    return response.status(400).json({ error: 'Category already exists' })
  }

  categoriesRepository.create({ name, description })

  return response.status(201).send()
})

categoryRoutes.get('/', (request, response) => {
  return response.status(200).json(categoriesRepository.list())
})
