import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './create-specification-useCase'

export class CreateSpecificationController {
  private readonly createSpecificationUseCase: CreateSpecificationUseCase

  constructor (createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase
  }

  handle (request: Request, response: Response) {
    const { name, description } = request.body

    this.createSpecificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
