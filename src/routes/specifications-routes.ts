import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/specifications-repository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

export const specificationsRouter = Router()

specificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})
