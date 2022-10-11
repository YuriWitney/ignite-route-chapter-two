import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/specifications-repository'
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/create-specification-useCase'

export const specificationsRouter = Router()

const specificationRepository = new SpecificationsRepository()

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body
  const specificationsService = new CreateSpecificationUseCase(specificationRepository)

  specificationsService.execute({ name, description })

  response.status(201).send()
})
