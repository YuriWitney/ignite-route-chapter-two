import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/specifications-repository'
import { CreateSpecificationService } from '../modules/cars/services/create-specification-service'

export const specificationsRouter = Router()

const specificationRepository = new SpecificationsRepository()

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body
  const specificationsService = new CreateSpecificationService(specificationRepository)

  specificationsService.execute({ name, description })

  response.status(201).send()
})
