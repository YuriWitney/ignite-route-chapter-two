import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

export const categoryRoutes = Router()

const categories: any[] = []

categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const newCategory = {
    id: uuidV4(),
    name,
    description
  }

  categories.push(newCategory)

  return response.status(201).json(newCategory)
})
